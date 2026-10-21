"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { ArrowRight, Check } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TrustMetricsCards from "@/components/TrustMetricsCards";

const brandingServiceOptions = [
  "Brand Strategy & Positioning",
  "Brand Identity & Guidelines",
  "Digital Marketing & Performance",
  "UI/UX & Experience Design",
  "AI-Powered Marketing",
  "Shopify & Web Development",
  "Not sure yet",
];

interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  website: string;
  service: string;
  goal: string;
  budget: string;
  source: string;
}

const contactValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name cannot exceed 50 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .trim()
    .min(1, "Last name must be at least 1 character")
    .max(50, "Last name cannot exceed 50 characters")
    .required("Last name is required"),
  email: Yup.string()
    .trim()
    .email("Please enter a valid work email address")
    .required("Work email is required"),
  company: Yup.string()
    .trim()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name cannot exceed 100 characters")
    .required("Company name is required"),
  website: Yup.string()
    .trim()
    .test(
      "is-valid-url",
      "Please enter a valid website URL (e.g. company.com or https://company.com)",
      (value) => {
        if (!value || value.trim() === "") return true;
        const pattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
        return pattern.test(value.trim());
      },
    ),
  service: Yup.string().required("Please select what you would like help with"),
  goal: Yup.string()
    .trim()
    .min(10, "Please describe your goal in at least 10 characters")
    .max(1000, "Goal cannot exceed 1000 characters")
    .required("Please describe your primary growth goal"),
  budget: Yup.string().trim().max(100, "Budget cannot exceed 100 characters"),
  source: Yup.string().trim().max(100, "Source cannot exceed 100 characters"),
});

const initialValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  website: "",
  service: "Brand Strategy & Positioning",
  goal: "",
  budget: "",
  source: "",
};

export default function BrandingContact() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const formik = useFormik<ContactFormValues>({
    initialValues,
    validationSchema: contactValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitError(null);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to submit inquiry");
        }

        setSubmitted(true);
        const params = new URLSearchParams();
        if (values.firstName) params.set("name", values.firstName);
        if (values.service) params.set("service", values.service);
        if (values.company) params.set("company", values.company);
        resetForm();
        router.push(`/thank-you?${params.toString()}`);
      } catch (error: any) {
        console.error("Failed to submit inquiry:", error);
        setSubmitError(
          error?.message || "Failed to submit. Please try again or email us directly.",
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section className="contact-section" id="contact">
      <div className="contact-intro reveal-on-scroll reveal-fade-left">
        <Box sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1.5 }}>
          <Chip
            label="05"
            size="small"
            sx={{
              backgroundColor: "#111111",
              color: "#FFEF46",
              fontWeight: 800,
              fontFamily: "DM Mono, monospace",
              fontSize: "0.6875rem",
              height: 22,
              px: 0.5,
            }}
          />
          <Box
            component="span"
            sx={{
              fontFamily: "DM Mono, monospace",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "text.secondary",
            }}
          >
            CONNECT WITH US
          </Box>
        </Box>

        <h2>Let’s Build Something Extraordinary Together.</h2>
        <p>
          Tell us about your project or business goals. We will follow up to
          explore how our brand, creative, digital marketing, and AI
          capabilities can support your growth.
        </p>

        <Stack spacing={2} sx={{ my: 4 }}>
          {[
            "Discuss your brand and marketing goals with our team.",
            "Explore actionable opportunities across branding, digital experiences, and digital growth.",
            "Start with a focused conversation, without sales pressure.",
          ].map((perk) => (
            <Box
              key={perk}
              sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
            >
              <Box
                component="span"
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#111111",
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{ fontSize: "0.875rem", color: "text.secondary" }}
              >
                {perk}
              </Typography>
            </Box>
          ))}
        </Stack>
      </div>

      {/* Form Column Wrapper */}
      <Box sx={{ width: "100%" }}>
        {/* Trust Metrics Cards: Placed before the form on mobile devices */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            mb: 3.5,
            width: "100%",
            justifyContent: "center",
          }}
        >
          <TrustMetricsCards />
        </Box>

        <Paper
          elevation={0}
          className="reveal-on-scroll reveal-fade-right"
          sx={{
            p: { xs: 3, md: 5 },
            backgroundColor: "#ffffff",
            border: "1px solid #dedad0",
            borderRadius: "20px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
          }}
        >
          {submitted ? (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  backgroundColor: "#FFEF46",
                  color: "#111111",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <Check size={28} />
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  mb: 1,
                  color: "text.primary",
                }}
              >
                Request received.
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.9375rem",
                  color: "text.secondary",
                  maxWidth: 440,
                  mx: "auto",
                  mb: 4,
                }}
              >
                Thank you for reaching out. A Digixito growth strategist will
                review your goals and follow up with tailored observations within
                one business day.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setSubmitted(false);
                  formik.resetForm();
                }}
                sx={{ py: 1.5, px: 3.5 }}
              >
                Send another message
              </Button>
            </Box>
          ) : (
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              noValidate
              aria-label="Request a growth conversation form"
            >
              <Grid container spacing={2.5}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    id="firstName"
                    name="firstName"
                    label="First name *"
                    variant="outlined"
                    size="small"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    id="lastName"
                    name="lastName"
                    label="Last name *"
                    variant="outlined"
                    size="small"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    type="email"
                    label="Work email *"
                    variant="outlined"
                    size="small"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    id="company"
                    name="company"
                    label="Company name *"
                    variant="outlined"
                    size="small"
                    value={formik.values.company}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.company && Boolean(formik.errors.company)
                    }
                    helperText={formik.touched.company && formik.errors.company}
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    fullWidth
                    id="website"
                    name="website"
                    label="Website (optional)"
                    variant="outlined"
                    size="small"
                    placeholder="https://yourcompany.com"
                    value={formik.values.website}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.website && Boolean(formik.errors.website)
                    }
                    helperText={formik.touched.website && formik.errors.website}
                  />
                </Grid>

                <Grid size={12}>
                  <Typography
                    sx={{
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      color: "text.primary",
                      mb: 1,
                    }}
                  >
                    What would you like help with? *
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {brandingServiceOptions.map((opt) => {
                      const isSelected = formik.values.service === opt;
                      return (
                        <Chip
                          key={opt}
                          label={opt}
                          clickable
                          onClick={() => {
                            formik.setFieldValue("service", opt);
                            formik.setFieldTouched("service", true, false);
                          }}
                          sx={{
                            py: 2,
                            px: 1,
                            fontSize: "0.8125rem",
                            fontWeight: 600,
                            backgroundColor: isSelected ? "#111111" : "#f8f6f0",
                            color: isSelected ? "#FFEF46" : "text.primary",
                            border: `1px solid ${isSelected ? "#111111" : "#dedad0"}`,
                            "&:hover": {
                              backgroundColor: isSelected
                                ? "#222222"
                                : "#f0ece2",
                            },
                          }}
                        />
                      );
                    })}
                  </Box>
                  {formik.touched.service && formik.errors.service && (
                    <Typography
                      sx={{
                        color: "error.main",
                        fontSize: "0.75rem",
                        mt: 1,
                        fontWeight: 500,
                      }}
                    >
                      {formik.errors.service}
                    </Typography>
                  )}
                </Grid>

                <Grid size={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    id="goal"
                    name="goal"
                    label="What is your primary growth goal? *"
                    variant="outlined"
                    placeholder="Tell us what you are trying to position, improve, or scale..."
                    value={formik.values.goal}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.goal && Boolean(formik.errors.goal)}
                    helperText={formik.touched.goal && formik.errors.goal}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    id="budget"
                    name="budget"
                    label="Monthly marketing budget (optional)"
                    variant="outlined"
                    size="small"
                    placeholder="e.g. $5k - $15k / mo"
                    value={formik.values.budget}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.budget && Boolean(formik.errors.budget)
                    }
                    helperText={formik.touched.budget && formik.errors.budget}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    id="source"
                    name="source"
                    label="How did you hear about Digixito? (optional)"
                    variant="outlined"
                    size="small"
                    placeholder="e.g. Search, referral, LinkedIn"
                    value={formik.values.source}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.source && Boolean(formik.errors.source)
                    }
                    helperText={formik.touched.source && formik.errors.source}
                  />
                </Grid>

                {submitError && (
                  <Grid size={12}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: "10px",
                        backgroundColor: "#fee2e2",
                        border: "1px solid #fca5a5",
                        color: "#991b1b",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                      }}
                    >
                      {submitError}
                    </Box>
                  </Grid>
                )}

                <Grid size={12}>
                  <Box sx={{ mt: 1 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      disabled={formik.isSubmitting}
                      endIcon={
                        formik.isSubmitting ? (
                          <CircularProgress size={16} color="inherit" />
                        ) : (
                          <ArrowRight size={16} />
                        )
                      }
                      sx={{
                        py: 1.75,
                        fontSize: "0.9375rem",
                        border: "1px solid rgba(0,0,0,0.08)",
                      }}
                    >
                      {formik.isSubmitting
                        ? "Submitting request..."
                        : "Request a growth conversation"}
                    </Button>
                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        color: "text.secondary",
                        textAlign: "center",
                        mt: 1.5,
                      }}
                    >
                      No obligation. Just a focused conversation about your goals
                      and possible next steps.
                    </Typography>
                  </Box>
                </Grid>

                <Grid size={12}>
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      color: "text.secondary",
                      textAlign: "center",
                    }}
                  >
                    Your information will be used to respond to your inquiry.{" "}
                    <Box
                      component="a"
                      href="#top"
                      sx={{
                        color: "text.primary",
                        fontWeight: 600,
                        textDecoration: "underline",
                      }}
                    >
                      Digixito’s privacy policy.
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          )}
        </Paper>
      </Box>
    </section>
  );
}
