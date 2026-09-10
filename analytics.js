// Conversion events for Google Ads. The tag itself sits inline in the head of each
// page the way Google's install instructions want it, this file just fires the two
// events. Labels come off the event snippet on each conversion action in Ads.
(function () {
  var AW_ID = 'AW-18291870091';
  var LEAD_LABEL = 'fOK9CPG_-vIcEIuTn5JE';    // "Enquiry form" conversion
  var CALL_LABEL = 'SGHPCJv_gvMcEIuTn5JE';    // "Click to call" conversion

  if (typeof gtag !== 'function') return;

  // Formspree only sends people to thanks.html once it has accepted the enquiry,
  // so a page load here means the thing actually went through.
  if (LEAD_LABEL && /\/thanks(\.html)?$/.test(location.pathname)) {
    gtag('event', 'conversion', { send_to: AW_ID + '/' + LEAD_LABEL });
  }

  // Most people round here ring rather than fill in a form.
  if (CALL_LABEL) {
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href^="tel:"]');
      if (!a) return;
      gtag('event', 'conversion', { send_to: AW_ID + '/' + CALL_LABEL });
    });
  }
})();
