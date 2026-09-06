const PORTFOLIO_BASE_URL =
  import.meta.env.VITE_PORTFOLIO_BASE_URL || window.location.origin;

export function generateTrackingLink({
  company = "",
  role = "",
  department = "",
  location = "",
  source = "",
  applicationDate = "",
  jobId = "",
  jobPostingUrl = "",
  applicationStatus = "",
  utmSource = "",
  utmMedium = "",
  utmCampaign = "",
  utmTerm = "",
  utmContent = "",
} = {}) {
  const params = new URLSearchParams();

  if (company) params.set("company", company);
  if (role) params.set("role", role);
  if (department) params.set("department", department);
  if (location) params.set("location", location);
  if (source) params.set("source", source);
  if (applicationDate) params.set("applicationDate", applicationDate);
  if (jobId) params.set("jobId", jobId);
  if (jobPostingUrl) params.set("jobPostingUrl", jobPostingUrl);
  if (applicationStatus) {
    params.set("applicationStatus", applicationStatus);
  }

  if (utmSource) params.set("utm_source", utmSource);
  if (utmMedium) params.set("utm_medium", utmMedium);
  if (utmCampaign) params.set("utm_campaign", utmCampaign);
  if (utmTerm) params.set("utm_term", utmTerm);
  if (utmContent) params.set("utm_content", utmContent);

  const queryString = params.toString();

  return queryString
    ? `${PORTFOLIO_BASE_URL}/?${queryString}`
    : `${PORTFOLIO_BASE_URL}/`;
}

export function generateNaukriTrackingLink({
  company = "",
  role = "",
  department = "QA",
  location = "",
  applicationDate = "",
  jobId = "",
  jobPostingUrl = "",
} = {}) {
  return generateTrackingLink({
    company,
    role,
    department,
    location,
    applicationDate,
    jobId,
    jobPostingUrl,
    source: "Naukri",
    utmSource: "naukri",
    utmMedium: "job_application",
    utmCampaign: company
      ? `${company}-application`
      : "job-application",
  });
}

export function generateLinkedInTrackingLink({
  company = "",
  role = "",
  department = "QA",
  location = "",
  applicationDate = "",
  jobId = "",
  jobPostingUrl = "",
} = {}) {
  return generateTrackingLink({
    company,
    role,
    department,
    location,
    applicationDate,
    jobId,
    jobPostingUrl,
    source: "LinkedIn",
    utmSource: "linkedin",
    utmMedium: "job_application",
    utmCampaign: company
      ? `${company}-application`
      : "job-application",
  });
}

export function generateIndeedTrackingLink({
  company = "",
  role = "",
  department = "QA",
  location = "",
  applicationDate = "",
  jobId = "",
  jobPostingUrl = "",
} = {}) {
  return generateTrackingLink({
    company,
    role,
    department,
    location,
    applicationDate,
    jobId,
    jobPostingUrl,
    source: "Indeed",
    utmSource: "indeed",
    utmMedium: "job_application",
    utmCampaign: company
      ? `${company}-application`
      : "job-application",
  });
}

export function generateCompanyTrackingLink({
  company = "",
  role = "",
  department = "QA",
  location = "",
  applicationDate = "",
  jobId = "",
  jobPostingUrl = "",
  source = "Direct Application",
} = {}) {
  return generateTrackingLink({
    company,
    role,
    department,
    location,
    applicationDate,
    jobId,
    jobPostingUrl,
    source,
    utmSource: "direct",
    utmMedium: "job_application",
    utmCampaign: company
      ? `${company}-application`
      : "job-application",
  });
}