import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "3yVtSCNF1crKsf81WeRcx4",  // ID of a project you are using
      token: "ikqVTJQ8kn2sCJw3u2ERdmE4So2He9hG13vbMsxgucNSMNREo26snYeAqTrllaEcpBjSsdWrQr6VSN79uQ"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})