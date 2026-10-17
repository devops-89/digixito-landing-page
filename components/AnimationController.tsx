'use client'

import { useEffect } from 'react'

export default function AnimationController() {
  useEffect(() => {
    // 1. Mark page as loaded for CSS entrance animations
    const markLoaded = () => {
      document.documentElement.classList.add('page-loaded')
      document.body.classList.add('page-loaded')
    }

    if (document.readyState === 'complete') {
      markLoaded()
    } else {
      window.addEventListener('load', markLoaded, { once: true })
    }

    // 2. IntersectionObserver for reveal on scroll
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll, [data-reveal]').forEach((el) => {
        el.classList.add('is-revealed')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            // Once revealed, keep it visible
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    const observeElements = () => {
      const elements = document.querySelectorAll(
        '.reveal-on-scroll:not(.is-revealed), [data-reveal]:not(.is-revealed)'
      )
      elements.forEach((el) => observer.observe(el))
    }

    observeElements()

    // Observe any dynamically added or tab-switched elements
    const mutationObserver = new MutationObserver(() => {
      observeElements()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
      window.removeEventListener('load', markLoaded)
    }
  }, [])

  return null
}
