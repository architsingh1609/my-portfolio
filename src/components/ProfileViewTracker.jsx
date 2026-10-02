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
| Storage Keys
|--------------------------------------------------------------------------
*/

const STORAGE_KEYS = {
  emailSent:
    "portfolio_profile_view_email_sent",

  applicationContext:
    "portfolio_application_context",

  originalTrackingUrl:
    "portfolio_original_tracking_url",

  landingPage:
    "portfolio_landing_page",

  returningVisitor:
    "portfolio_returning_visitor",

  visitCount:
    "portfolio_visit_count",

  sectionsViewed:
    "portfolio_sections_viewed",

  resumeClicked:
    "portfolio_resume_clicked",

  linkedinClicked:
    "portfolio_linkedin_clicked",

  githubClicked:
    "portfolio_github_clicked",

  contactFormUsed:
    "portfolio_contact_form_used",
};

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

/*
|--------------------------------------------------------------------------
| Browser Detection
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| Operating System Detection
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| Device Detection
|--------------------------------------------------------------------------
*/

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
|
| Captures application/job information from URL parameters and preserves
| it inside sessionStorage so the information is not lost when navigation
| changes the browser URL.
|--------------------------------------------------------------------------
*/

function getApplicationData() {
  const currentUrl =
    new URL(window.location.href);

  const params =
    currentUrl.searchParams;

  const existingData =
    sessionStorage.getItem(
      STORAGE_KEYS.applicationContext
    );

  /*
  |--------------------------------------------------------------------------
  | Current URL Data
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
      params.get("jobId") ||
      "",

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
  | Check For Tracking Parameters
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
  | Save Current Tracking Data
  |--------------------------------------------------------------------------
  */

  if (hasTrackingData) {
    sessionStorage.setItem(
      STORAGE_KEYS.applicationContext,
      JSON.stringify(currentData)
    );

    sessionStorage.setItem(
      STORAGE_KEYS.originalTrackingUrl,
      window.location.href
    );

    return {
      company: getValue(
        currentData.company
      ),

      jobRole: getValue(
        currentData.jobRole
      ),

      department: getValue(
        currentData.department
      ),

      applicationLocation: getValue(
        currentData.applicationLocation
      ),

      applicationSource: getValue(
        currentData.applicationSource,
        "Direct Visit"
      ),

      applicationDate: getValue(
        currentData.applicationDate
      ),

      jobId: getValue(
        currentData.jobId
      ),

      jobPostingUrl: getValue(
        currentData.jobPostingUrl
      ),

      applicationStatus: getValue(
        currentData.applicationStatus
      ),

      utmSource: getValue(
        currentData.utmSource
      ),

      utmMedium: getValue(
        currentData.utmMedium
      ),

      utmCampaign: getValue(
        currentData.utmCampaign
      ),

      utmTerm: getValue(
        currentData.utmTerm
      ),

      utmContent: getValue(
        currentData.utmContent
      ),
    };
  }

  /*
  |--------------------------------------------------------------------------
  | Recover Existing Session Data
  |--------------------------------------------------------------------------
  */

  if (existingData) {
    try {
      const savedData =
        JSON.parse(existingData);

      return {
        company: getValue(
          savedData.company
        ),

        jobRole: getValue(
          savedData.jobRole
        ),

        department: getValue(
          savedData.department
        ),

        applicationLocation: getValue(
          savedData.applicationLocation
        ),

        applicationSource: getValue(
          savedData.applicationSource,
          "Direct Visit"
        ),

        applicationDate: getValue(
          savedData.applicationDate
        ),

        jobId: getValue(
          savedData.jobId
        ),

        jobPostingUrl: getValue(
          savedData.jobPostingUrl
        ),

        applicationStatus: getValue(
          savedData.applicationStatus
        ),

        utmSource: getValue(
          savedData.utmSource
        ),

        utmMedium: getValue(
          savedData.utmMedium
        ),

        utmCampaign: getValue(
          savedData.utmCampaign
        ),

        utmTerm: getValue(
          savedData.utmTerm
        ),

        utmContent: getValue(
          savedData.utmContent
        ),
      };
    } catch {
      sessionStorage.removeItem(
        STORAGE_KEYS.applicationContext
      );
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Direct Visitor
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
      STORAGE_KEYS.returningVisitor
    ) === "true";

  localStorage.setItem(
    STORAGE_KEYS.returningVisitor,
    "true"
  );

  const previousVisits =
    Number(
      localStorage.getItem(
        STORAGE_KEYS.visitCount
      )
    ) || 0;

  const visitNumber =
    previousVisits + 1;

  localStorage.setItem(
    STORAGE_KEYS.visitCount,
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
| Section Tracking
|--------------------------------------------------------------------------
*/

function getSectionsViewed() {
  try {
    const sections =
      JSON.parse(
        sessionStorage.getItem(
          STORAGE_KEYS.sectionsViewed
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
  try {
    sessionStorage.setItem(
      STORAGE_KEYS.sectionsViewed,
      JSON.stringify(sections)
    );
  } catch {
    // Ignore storage errors.
  }
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
  } catch {
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
    let isMounted = true;

    let sectionObserver = null;

    let sendTimer = null;

    /*
    |--------------------------------------------------------------------------
    | React StrictMode / Session Protection
    |--------------------------------------------------------------------------
    */

    const emailSentKey =
      STORAGE_KEYS.emailSent;

    if (
      sessionStorage.getItem(
        emailSentKey
      ) === "true"
    ) {
      return undefined;
    }

    /*
    |--------------------------------------------------------------------------
    | Session Information
    |--------------------------------------------------------------------------
    */

    const trackingId =
      generateTrackingId();

    const applicationData =
      getApplicationData();

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
        STORAGE_KEYS.originalTrackingUrl
      ) ||
      window.location.href;

    /*
    |--------------------------------------------------------------------------
    | Landing Page
    |--------------------------------------------------------------------------
    */

    let landingPage =
      sessionStorage.getItem(
        STORAGE_KEYS.landingPage
      );

    if (!landingPage) {
      landingPage =
        originalTrackingUrl;

      sessionStorage.setItem(
        STORAGE_KEYS.landingPage,
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
    | Section Tracking
    |--------------------------------------------------------------------------
    */

    const existingSections =
      getSectionsViewed();

    saveSectionsViewed(
      existingSections
    );

    if (
      "IntersectionObserver" in
      window
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

    const handleClick = (event) => {
      const target =
        event.target;

      if (
        !target ||
        typeof target.closest !==
          "function"
      ) {
        return;
      }

      const element =
        target.closest(
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
          STORAGE_KEYS.resumeClicked,
          "true"
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
          STORAGE_KEYS.linkedinClicked,
          "true"
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
          STORAGE_KEYS.githubClicked,
          "true"
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
          STORAGE_KEYS.contactFormUsed,
          "true"
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
        if (!isMounted) {
          return;
        }

        /*
        |--------------------------------------------------------------------------
        | Prevent Duplicate Send
        |--------------------------------------------------------------------------
        */

        if (
          sessionStorage.getItem(
            emailSentKey
          ) === "true"
        ) {
          return;
        }

        /*
        |--------------------------------------------------------------------------
        | EmailJS Configuration Check
        |--------------------------------------------------------------------------
        */

        if (
          !EMAILJS_SERVICE_ID ||
          !EMAILJS_TEMPLATE_ID ||
          !EMAILJS_PUBLIC_KEY
        ) {
          return;
        }

        /*
        |--------------------------------------------------------------------------
        | Mark As Pending
        |--------------------------------------------------------------------------
        |
        | This prevents another StrictMode/component execution from starting
        | another notification while the asynchronous request is running.
        |--------------------------------------------------------------------------
        */

        sessionStorage.setItem(
          emailSentKey,
          "pending"
        );

        try {
          /*
          |--------------------------------------------------------------------------
          | Location
          |--------------------------------------------------------------------------
          */

          const locationData =
            await getLocationData();

          if (!isMounted) {
            sessionStorage.removeItem(
              emailSentKey
            );

            return;
          }

          /*
          |--------------------------------------------------------------------------
          | Engagement
          |--------------------------------------------------------------------------
          */

          resumeClicked =
            resumeClicked ||
            sessionStorage.getItem(
              STORAGE_KEYS.resumeClicked
            ) === "true";

          linkedinClicked =
            linkedinClicked ||
            sessionStorage.getItem(
              STORAGE_KEYS.linkedinClicked
            ) === "true";

          githubClicked =
            githubClicked ||
            sessionStorage.getItem(
              STORAGE_KEYS.githubClicked
            ) === "true";

          contactFormUsed =
            contactFormUsed ||
            sessionStorage.getItem(
              STORAGE_KEYS.contactFormUsed
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
          | EmailJS Template Parameters
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
              "Active at time of notification",

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
          | Send EmailJS Notification
          |--------------------------------------------------------------------------
          */

          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams,
            {
              publicKey:
                EMAILJS_PUBLIC_KEY,
            }
          );

          /*
          |--------------------------------------------------------------------------
          | Mark Successfully Sent
          |--------------------------------------------------------------------------
          */

          sessionStorage.setItem(
            emailSentKey,
            "true"
          );
        } catch {
          /*
          |--------------------------------------------------------------------------
          | Allow Retry If Sending Failed
          |--------------------------------------------------------------------------
          */

          sessionStorage.removeItem(
            emailSentKey
          );
        }
      };

    /*
    |--------------------------------------------------------------------------
    | Delayed Notification
    |--------------------------------------------------------------------------
    |
    | Wait 15 seconds so the visitor has time to interact with the portfolio.
    |--------------------------------------------------------------------------
    */

    sendTimer =
      window.setTimeout(() => {
        collectAndSend();
      }, 15000);

    /*
    |--------------------------------------------------------------------------
    | Cleanup
    |--------------------------------------------------------------------------
    */

    return () => {
      isMounted = false;

      if (sendTimer) {
        window.clearTimeout(
          sendTimer
        );
      }

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