import { Jimp } from 'jimp'

async function removeBackground() {
  const inputPath = 'C:\\Users\\kunal\\.gemini\\antigravity-ide\\brain\\5a361904-eb39-4006-a102-d1a2955cead5\\hero_character_yellow_1792344157769.jpg'
  const outputPath = 'd:\\digixito-website-design\\public\\hero2-character.png'

  console.log('Reading image...')
  const image = await Jimp.read(inputPath)
  const width = image.bitmap.width
  const height = image.bitmap.height

  // Sample corner color
  const sampleColor = image.getPixelColor(10, 10)
  const rBg = (sampleColor >> 24) & 255
  const gBg = (sampleColor >> 16) & 255
  const bBg = (sampleColor >> 8) & 255
  console.log(`Sampled background RGB: (${rBg}, ${gBg}, ${bBg})`)

  // Scan every pixel and calculate Euclidean distance in RGB color space
  image.scan(0, 0, width, height, (x, y, idx) => {
    const r = image.bitmap.data[idx]
    const g = image.bitmap.data[idx + 1]
    const b = image.bitmap.data[idx + 2]

    // Distance to yellow background
    const dist = Math.sqrt(
      Math.pow(r - rBg, 2) + Math.pow(g - gBg, 2) + Math.pow(b - bBg, 2)
    )

    // Thresholds for smooth anti-aliased transparency
    const transparentThreshold = 65
    const featherRange = 25

    if (dist < transparentThreshold) {
      image.bitmap.data[idx + 3] = 0 // completely transparent
    } else if (dist < transparentThreshold + featherRange) {
      // Soft transition
      const alphaFactor = (dist - transparentThreshold) / featherRange
      image.bitmap.data[idx + 3] = Math.round(255 * alphaFactor)
    }
  })

  await image.write(outputPath)
  console.log(`Saved transparent PNG to ${outputPath}`)
}

removeBackground().catch(console.error)
