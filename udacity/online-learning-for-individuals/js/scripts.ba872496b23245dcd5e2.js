(function() {
  const w = window;
  function l() {
    const intercom = w.Intercom;
    if (intercom) {
      Intercom('onShow', function() {
        // user without sign in will be assigned a visitorId
        const intercomId = Intercom('getVisitorId') ? Intercom('getVisitorId') : '';
        if (window.analytics) {
          window.analytics.track('Intercom Live Chat User Lead', {
            category: 'Live Help',
            label: 'Live help CTA - chat opened',
            intercom_user_id: intercomId
          })
        }
      });
    }
  }

  if (window.attachEvent) {
    window.attachEvent('onload', l);
  } else {
    window.addEventListener('load', l, false);
  }
})();

;