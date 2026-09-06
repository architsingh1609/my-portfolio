import { useEffect } from "react";
import emailjs from "@emailjs/browser";

/*
|--------------------------------------------------------------------------
| EmailJS Configuration
|--------------------------------------------------------------------------
*/

const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID;

const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/*
|--------------------------------------------------------------------------
| Utility Functions
|--------------------------------------------------------------------------
*/

function getValue(value, fallback = "Not available") {
  if (
    value === undefined ||
    value === null ||
    value === ""
  ) {
    return fallback;
  }

  return String(value);
}

function generateTrackingId() {
  const randomPart = Math.random()
    .toString(36)
    .substring(2, 8)
    .toUpperCase();

  return `ARCHIT-${Date.now()}-${randomPart}`;
}

function getBrowser(userAgent) {
  if (/Edg\//i.test(userAgent)) {
    return "Microsoft Edge";
  }

  if (/OPR\//i.test(userAgent)) {
    return "Opera";
  }

  if (/Chrome\//i.test(userAgent)) {
    return "Google Chrome";
  }

  if (/Firefox\//i.test(userAgent)) {
    return "Mozilla Firefox";
  }

  if (
    /Safari\//i.test(userAgent) &&
    !/Chrome\//i.test(userAgent)
  ) {
    return "Safari";
  }

  return "Unknown";
}

function getOperatingSystem(userAgent) {
  if (/Windows/i.test(userAgent)) {
    return "Windows";
  }

  if (/Macintosh|Mac OS X/i.test(userAgent)) {
    return "macOS";
  }

  if (/Android/i.test(userAgent)) {
    return "Android";
  }

  if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return "iOS";
  }

  if (/Linux/i.test(userAgent)) {
    return "Linux";
  }

  return "Unknown";
}

function getDevice() {
  if (window.innerWidth <= 768) {
    return "Mobile";
  }

  if (window.innerWidth <= 1024) {
    return "Tablet";
  }

  return "Desktop";
}

/*
|--------------------------------------------------------------------------
| Application Tracking
|--------------------------------------------------------------------------
*/

function getApplicationData() {
  const currentUrl =
    new URL(window.location.href);

  const params =
    currentUrl.searchParams;

  const existingData =
    sessionStorage.getItem(
      "portfolio_application_context"
    );

  /*
  |--------------------------------------------------------------------------
  | First priority: current URL parameters
  |--------------------------------------------------------------------------
  */

  const currentData = {
    company:
      params.get("company") || "",

    jobRole:
      params.get("role") ||
      params.get("jobRole") ||
      "",

    department:
      params.get("department") || "",

    applicationLocation:
      params.get("location") ||
      params.get("jobLocation") ||
      "",

    applicationSource:
      params.get("source") ||
      params.get("applicationSource") ||
      "",

    applicationDate:
      params.get("applicationDate") ||
      "",

    jobId:
      params.get("jobId") || "",

    jobPostingUrl:
      params.get("jobPostingUrl") ||
      params.get("jobUrl") ||
      "",

    applicationStatus:
      params.get("applicationStatus") ||
      params.get("status") ||
      "",

    utmSource:
      params.get("utm_source") ||
      "",

    utmMedium:
      params.get("utm_medium") ||
      "",

    utmCampaign:
      params.get("utm_campaign") ||
      "",

    utmTerm:
      params.get("utm_term") ||
      "",

    utmContent:
      params.get("utm_content") ||
      "",
  };

  /*
  |--------------------------------------------------------------------------
  | Determine whether this URL actually contains tracking data
  |--------------------------------------------------------------------------
  */

  const hasTrackingData =
    Object.values(currentData).some(
      (value) =>
        value !== undefined &&
        value !== null &&
        value !== ""
    );

  /*
  |--------------------------------------------------------------------------
  | If URL contains tracking data:
  | save it immediately.
  |--------------------------------------------------------------------------
  */

  if (hasTrackingData) {
    sessionStorage.setItem(
      "portfolio_application_context",
      JSON.stringify(currentData)
    );

    sessionStorage.setItem(
      "portfolio_original_tracking_url",
      window.location.href
    );

    console.log(
      "Application tracking parameters captured:",
      currentData
    );

    return {
      company:
        getValue(
          currentData.company
        ),

      jobRole:
        getValue(
          currentData.jobRole
        ),

      department:
        getValue(
          currentData.department
        ),

      applicationLocation:
        getValue(
          currentData.applicationLocation
        ),

      applicationSource:
        getValue(
          currentData.applicationSource,
          "Direct Visit"
        ),

      applicationDate:
        getValue(
          currentData.applicationDate
        ),

      jobId:
        getValue(
          currentData.jobId
        ),

      jobPostingUrl:
        getValue(
          currentData.jobPostingUrl
        ),

      applicationStatus:
        getValue(
          currentData.applicationStatus
        ),

      utmSource:
        getValue(
          currentData.utmSource
        ),

      utmMedium:
        getValue(
          currentData.utmMedium
        ),

      utmCampaign:
        getValue(
          currentData.utmCampaign
        ),

      utmTerm:
        getValue(
          currentData.utmTerm
        ),

      utmContent:
        getValue(
          currentData.utmContent
        ),
    };
  }

  /*
  |--------------------------------------------------------------------------
  | If URL no longer has parameters:
  | recover previously saved tracking data.
  |--------------------------------------------------------------------------
  */

  if (existingData) {
    try {
      const savedData =
        JSON.parse(existingData);

      console.log(
        "Recovered application tracking data:",
        savedData
      );

      return {
        company:
          getValue(
            savedData.company
          ),

        jobRole:
          getValue(
            savedData.jobRole
          ),

        department:
          getValue(
            savedData.department
          ),

        applicationLocation:
          getValue(
            savedData.applicationLocation
          ),

        applicationSource:
          getValue(
            savedData.applicationSource,
            "Direct Visit"
          ),

        applicationDate:
          getValue(
            savedData.applicationDate
          ),

        jobId:
          getValue(
            savedData.jobId
          ),

        jobPostingUrl:
          getValue(
            savedData.jobPostingUrl
          ),

        applicationStatus:
          getValue(
            savedData.applicationStatus
          ),

        utmSource:
          getValue(
            savedData.utmSource
          ),

        utmMedium:
          getValue(
            savedData.utmMedium
          ),

        utmCampaign:
          getValue(
            savedData.utmCampaign
          ),

        utmTerm:
          getValue(
            savedData.utmTerm
          ),

        utmContent:
          getValue(
            savedData.utmContent
          ),
      };
    } catch (error) {
      console.warn(
        "Could not recover application tracking data:",
        error
      );
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Normal direct visitor
  |--------------------------------------------------------------------------
  */

  return {
    company: "Not available",
    jobRole: "Not available",
    department: "Not available",
    applicationLocation: "Not available",
    applicationSource: "Direct Visit",
    applicationDate: "Not available",
    jobId: "Not available",
    jobPostingUrl: "Not available",
    applicationStatus: "Not available",
    utmSource: "Not available",
    utmMedium: "Not available",
    utmCampaign: "Not available",
    utmTerm: "Not available",
    utmContent: "Not available",
  };
}

/*
|--------------------------------------------------------------------------
| Visitor Information
|--------------------------------------------------------------------------
*/

function getVisitorInformation() {
  const previousVisitor =
    localStorage.getItem(
      "portfolio_returning_visitor"
    ) === "true";

  localStorage.setItem(
    "portfolio_returning_visitor",
    "true"
  );

  const previousVisits =
    Number(
      localStorage.getItem(
        "portfolio_visit_count"
      )
    ) || 0;

  const visitNumber =
    previousVisits + 1;

  localStorage.setItem(
    "portfolio_visit_count",
    String(visitNumber)
  );

  return {
    visitorType: previousVisitor
      ? "Returning Visitor"
      : "New Visitor",

    visitNumber,
  };
}

/*
|--------------------------------------------------------------------------
| Sections
|--------------------------------------------------------------------------
*/

function getSectionsViewed() {
  try {
    const sections =
      JSON.parse(
        sessionStorage.getItem(
          "portfolio_sections_viewed"
        ) || "[]"
      );

    return Array.isArray(sections)
      ? sections
      : [];
  } catch {
    return [];
  }
}

function saveSectionsViewed(
  sections
) {
  sessionStorage.setItem(
    "portfolio_sections_viewed",
    JSON.stringify(sections)
  );
}

/*
|--------------------------------------------------------------------------
| Location
|--------------------------------------------------------------------------
*/

async function getLocationData() {
  const defaultTimezone =
    Intl.DateTimeFormat()
      .resolvedOptions()
      .timeZone ||
    "Not available";

  const defaultData = {
    country: "Not available",
    region: "Not available",
    city: "Not available",
    postalCode: "Not available",
    timezone: defaultTimezone,
    ipAddress: "Not available",
    organization: "Not available",
    isp: "Not available",
  };

  try {
    const response =
      await fetch(
        "https://ipapi.co/json/"
      );

    if (!response.ok) {
      return defaultData;
    }

    const data =
      await response.json();

    return {
      country:
        data.country_name ||
        defaultData.country,

      region:
        data.region ||
        defaultData.region,

      city:
        data.city ||
        defaultData.city,

      postalCode:
        data.postal ||
        defaultData.postalCode,

      timezone:
        data.timezone ||
        defaultTimezone,

      ipAddress:
        data.ip ||
        defaultData.ipAddress,

      organization:
        data.org ||
        defaultData.organization,

      isp:
        data.org ||
        defaultData.isp,
    };
  } catch (error) {
    console.warn(
      "Visitor location lookup unavailable:",
      error
    );

    return defaultData;
  }
}

/*
|--------------------------------------------------------------------------
| Profile View Tracker
|--------------------------------------------------------------------------
*/

function ProfileViewTracker() {
  useEffect(() => {
    const emailSentKey =
      "portfolio_profile_view_email_sent";

    /*
    |--------------------------------------------------------------------------
    | React StrictMode Protection
    |--------------------------------------------------------------------------
    */

    if (
      sessionStorage.getItem(
        emailSentKey
      ) === "true"
    ) {
      console.log(
        "Portfolio visitor notification already sent for this session."
      );

      return;
    }

    /*
    |--------------------------------------------------------------------------
    | Session Information
    |--------------------------------------------------------------------------
    */

    const trackingId =
      generateTrackingId();

    /*
    |--------------------------------------------------------------------------
    | Capture application parameters FIRST
    |--------------------------------------------------------------------------
    */

    const applicationData =
      getApplicationData();

    console.log(
      "Final application context:",
      applicationData
    );

    const visitorInformation =
      getVisitorInformation();

    const userAgent =
      navigator.userAgent;

    /*
    |--------------------------------------------------------------------------
    | Original Tracking URL
    |--------------------------------------------------------------------------
    */

    const originalTrackingUrl =
      sessionStorage.getItem(
        "portfolio_original_tracking_url"
      ) ||
      window.location.href;

    /*
    |--------------------------------------------------------------------------
    | Landing Page
    |--------------------------------------------------------------------------
    */

    let landingPage =
      sessionStorage.getItem(
        "portfolio_landing_page"
      );

    if (!landingPage) {
      landingPage =
        originalTrackingUrl;

      sessionStorage.setItem(
        "portfolio_landing_page",
        landingPage
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Engagement State
    |--------------------------------------------------------------------------
    */

    let resumeClicked = false;
    let linkedinClicked = false;
    let githubClicked = false;
    let contactFormUsed = false;

    /*
    |--------------------------------------------------------------------------
    | Visit Start Time
    |--------------------------------------------------------------------------
    */

    const visitStartTime =
      Date.now();

    /*
    |--------------------------------------------------------------------------
    | Section Tracking
    |--------------------------------------------------------------------------
    */

    const existingSections =
      getSectionsViewed();

    saveSectionsViewed(
      existingSections
    );

    let sectionObserver = null;

    if (
      "IntersectionObserver" in window
    ) {
      sectionObserver =
        new IntersectionObserver(
          (entries) => {
            entries.forEach(
              (entry) => {
                if (
                  !entry.isIntersecting
                ) {
                  return;
                }

                const sectionId =
                  entry.target.id;

                if (!sectionId) {
                  return;
                }

                const sections =
                  getSectionsViewed();

                if (
                  !sections.includes(
                    sectionId
                  )
                ) {
                  sections.push(
                    sectionId
                  );

                  saveSectionsViewed(
                    sections
                  );
                }
              }
            );
          },
          {
            threshold: 0.25,
          }
        );

      document
        .querySelectorAll(
          "section[id]"
        )
        .forEach((section) => {
          sectionObserver.observe(
            section
          );
        });
    }

    /*
    |--------------------------------------------------------------------------
    | Click Tracking
    |--------------------------------------------------------------------------
    */

    const handleClick = (
      event
    ) => {
      const element =
        event.target.closest(
          "a, button"
        );

      if (!element) {
        return;
      }

      const href =
        element.getAttribute(
          "href"
        ) || "";

      const text =
        element.textContent
          ?.trim()
          .toLowerCase() || "";

      const normalizedHref =
        href.toLowerCase();

      /*
      |--------------------------------------------------------------------------
      | Resume
      |--------------------------------------------------------------------------
      */

      if (
        normalizedHref.includes(
          "resume"
        ) ||
        normalizedHref.endsWith(
          ".pdf"
        ) ||
        text.includes(
          "resume"
        )
      ) {
        resumeClicked = true;

        sessionStorage.setItem(
          "portfolio_resume_clicked",
          "true"
        );

        console.log(
          "Resume click detected."
        );
      }

      /*
      |--------------------------------------------------------------------------
      | LinkedIn
      |--------------------------------------------------------------------------
      */

      if (
        normalizedHref.includes(
          "linkedin.com"
        ) ||
        text.includes(
          "linkedin"
        )
      ) {
        linkedinClicked = true;

        sessionStorage.setItem(
          "portfolio_linkedin_clicked",
          "true"
        );

        console.log(
          "LinkedIn click detected."
        );
      }

      /*
      |--------------------------------------------------------------------------
      | GitHub
      |--------------------------------------------------------------------------
      */

      if (
        normalizedHref.includes(
          "github.com"
        ) ||
        text.includes(
          "github"
        )
      ) {
        githubClicked = true;

        sessionStorage.setItem(
          "portfolio_github_clicked",
          "true"
        );

        console.log(
          "GitHub click detected."
        );
      }

      /*
      |--------------------------------------------------------------------------
      | Contact
      |--------------------------------------------------------------------------
      */

      if (
        normalizedHref.includes(
          "#contact"
        ) ||
        element.closest(
          "#contact"
        ) ||
        text.includes(
          "contact"
        )
      ) {
        contactFormUsed = true;

        sessionStorage.setItem(
          "portfolio_contact_form_used",
          "true"
        );

        console.log(
          "Contact interaction detected."
        );
      }
    };

    document.addEventListener(
      "click",
      handleClick
    );

    /*
    |--------------------------------------------------------------------------
    | Collect + Send
    |--------------------------------------------------------------------------
    */

    const collectAndSend =
      async () => {
        try {
          if (
            !EMAILJS_SERVICE_ID ||
            !EMAILJS_TEMPLATE_ID ||
            !EMAILJS_PUBLIC_KEY
          ) {
            console.error(
              "EmailJS configuration is incomplete."
            );

            return;
          }

          /*
          |--------------------------------------------------------------------------
          | Location
          |--------------------------------------------------------------------------
          */

          const locationData =
            await getLocationData();

          /*
          |--------------------------------------------------------------------------
          | Engagement
          |--------------------------------------------------------------------------
          */

          resumeClicked =
            resumeClicked ||
            sessionStorage.getItem(
              "portfolio_resume_clicked"
            ) === "true";

          linkedinClicked =
            linkedinClicked ||
            sessionStorage.getItem(
              "portfolio_linkedin_clicked"
            ) === "true";

          githubClicked =
            githubClicked ||
            sessionStorage.getItem(
              "portfolio_github_clicked"
            ) === "true";

          contactFormUsed =
            contactFormUsed ||
            sessionStorage.getItem(
              "portfolio_contact_form_used"
            ) === "true";

          /*
          |--------------------------------------------------------------------------
          | Sections
          |--------------------------------------------------------------------------
          */

          const sections =
            getSectionsViewed();

          /*
          |--------------------------------------------------------------------------
          | Application Source
          |--------------------------------------------------------------------------
          */

          const applicationSource =
            applicationData.applicationSource !==
            "Not available"
              ? applicationData.applicationSource
              : document.referrer ||
                "Direct Visit";

          /*
          |--------------------------------------------------------------------------
          | Visit Duration
          |--------------------------------------------------------------------------
          */

          const visitDurationSeconds =
            Math.round(
              (Date.now() -
                visitStartTime) /
                1000
            );

          const formattedVisitDuration =
            visitDurationSeconds < 60
              ? `${visitDurationSeconds} seconds`
              : `${Math.floor(
                  visitDurationSeconds / 60
                )}m ${
                  visitDurationSeconds % 60
                }s`;

          /*
          |--------------------------------------------------------------------------
          | EmailJS Parameters
          |--------------------------------------------------------------------------
          */

          const templateParams = {
            /*
            |--------------------------------------------------------------------------
            | Tracking
            |--------------------------------------------------------------------------
            */

            trackingId,

            visitorType:
              visitorInformation.visitorType,

            visitNumber:
              String(
                visitorInformation.visitNumber
              ),

            /*
            |--------------------------------------------------------------------------
            | Application Context
            |--------------------------------------------------------------------------
            */

            company:
              applicationData.company,

            jobRole:
              applicationData.jobRole,

            department:
              applicationData.department,

            applicationLocation:
              applicationData.applicationLocation,

            applicationSource,

            applicationDate:
              applicationData.applicationDate,

            jobId:
              applicationData.jobId,

            jobPostingUrl:
              applicationData.jobPostingUrl,

            applicationStatus:
              applicationData.applicationStatus,

            /*
            |--------------------------------------------------------------------------
            | Visitor Information
            |--------------------------------------------------------------------------
            */

            visitorName:
              "Not available",

            visitorEmail:
              "Not available",

            visitorCompany:
              "Not available",

            visitorDepartment:
              "Not available",

            contactAvailable:
              contactFormUsed
                ? "Yes — contact interaction detected"
                : "No",

            /*
            |--------------------------------------------------------------------------
            | Location
            |--------------------------------------------------------------------------
            */

            country:
              locationData.country,

            region:
              locationData.region,

            city:
              locationData.city,

            postalCode:
              locationData.postalCode,

            timezone:
              locationData.timezone,

            ipAddress:
              locationData.ipAddress,

            organization:
              locationData.organization,

            isp:
              locationData.isp,

            /*
            |--------------------------------------------------------------------------
            | Device
            |--------------------------------------------------------------------------
            */

            device:
              getDevice(),

            browser:
              getBrowser(
                userAgent
              ),

            operatingSystem:
              getOperatingSystem(
                userAgent
              ),

            screenSize:
              `${window.screen.width} × ${window.screen.height}`,

            language:
              navigator.language,

            onlineStatus:
              navigator.onLine
                ? "Online"
                : "Offline",

            /*
            |--------------------------------------------------------------------------
            | UTM
            |--------------------------------------------------------------------------
            */

            utmSource:
              applicationData.utmSource,

            utmMedium:
              applicationData.utmMedium,

            utmCampaign:
              applicationData.utmCampaign,

            utmTerm:
              applicationData.utmTerm,

            utmContent:
              applicationData.utmContent,

            /*
            |--------------------------------------------------------------------------
            | Portfolio Activity
            |--------------------------------------------------------------------------
            */

            page:
              originalTrackingUrl,

            path:
              window.location.pathname,

            referrer:
              document.referrer ||
              "Direct Visit",

            landingPage,

            pagesViewed:
              "1",

            sectionsViewed:
              sections.length > 0
                ? sections.join(
                    " → "
                  )
                : "None detected",

            visitDuration:
              formattedVisitDuration,

            resumeClicked:
              resumeClicked
                ? "Yes"
                : "No",

            linkedinClicked:
              linkedinClicked
                ? "Yes"
                : "No",

            githubClicked:
              githubClicked
                ? "Yes"
                : "No",

            contactFormUsed:
              contactFormUsed
                ? "Yes"
                : "No",

            /*
            |--------------------------------------------------------------------------
            | Timestamp
            |--------------------------------------------------------------------------
            */

            timestamp:
              new Date().toLocaleString(
                "en-IN",
                {
                  timeZone:
                    locationData.timezone ||
                    "Asia/Kolkata",

                  dateStyle:
                    "full",

                  timeStyle:
                    "long",
                }
              ),

            userAgent,
          };

          /*
          |--------------------------------------------------------------------------
          | Debug
          |--------------------------------------------------------------------------
          */

          console.log(
            "Portfolio profile view:",
            templateParams
          );

          /*
          |--------------------------------------------------------------------------
          | Send Email
          |--------------------------------------------------------------------------
          */

          const result =
            await emailjs.send(
              EMAILJS_SERVICE_ID,
              EMAILJS_TEMPLATE_ID,
              templateParams,
              {
                publicKey:
                  EMAILJS_PUBLIC_KEY,
              }
            );

          console.log(
            "Portfolio visitor notification sent successfully:",
            result.status,
            result.text
          );

          sessionStorage.setItem(
            emailSentKey,
            "true"
          );
        } catch (error) {
          console.error(
            "Portfolio profile tracking failed:",
            error
          );
        }
      };

    /*
    |--------------------------------------------------------------------------
    | Start Tracking
    |--------------------------------------------------------------------------
    */

    console.log(
      "Portfolio visitor tracking started:",
      {
        trackingId,

        visitorType:
          visitorInformation.visitorType,

        visitNumber:
          visitorInformation.visitNumber,

        originalTrackingUrl,

        applicationData,
      }
    );

    /*
    |--------------------------------------------------------------------------
    | IMPORTANT:
    | Wait before sending so visitor interactions can be captured.
    |--------------------------------------------------------------------------
    */

    const sendTimer =
      setTimeout(() => {
        collectAndSend();
      }, 15000);

    /*
    |--------------------------------------------------------------------------
    | Cleanup
    |--------------------------------------------------------------------------
    */

    return () => {
      clearTimeout(sendTimer);

      if (sectionObserver) {
        sectionObserver.disconnect();
      }

      document.removeEventListener(
        "click",
        handleClick
      );
    };
  }, []);

  return null;
}

export default ProfileViewTracker;