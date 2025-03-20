document.addEventListener('DOMContentLoaded', function() {
  const urlInput = document.getElementById('url-input');
  const encodeInput = document.getElementById('encode-text');
  const deviceSelect = document.getElementById('device-select');
  const orientationSelect = document.getElementById('orientation-select');
  const goButton = document.getElementById('go-button');
  const copyButton = document.getElementById('copy-button');
  const encodeButton = document.getElementById('encode-button');
  const deviceContainer = document.getElementById('device-container');
  const aboutUsSection = document.getElementById('about-us');
  const aboutUsNav = document.getElementById('about-us-nav');

  const queryParams = new URLSearchParams(window.location.search);
  const defaultUrl = queryParams.get('url') || '';
  const defaultOrientation = queryParams.get('orientation') || 'portrait';
  const hideAboutUs = queryParams.get('tevroc') !== null;

  urlInput.value = defaultUrl;
  orientationSelect.value = defaultOrientation;

  if (hideAboutUs) {
    aboutUsSection.style.display = 'none';
    aboutUsNav.style.display = 'none';
  }

  goButton.addEventListener('click', () => {
    const url = urlInput.value.trim();
    const device = deviceSelect.value;
    const orientation = orientationSelect.value;
    if (url && device && orientation) {
      renderDevice(url, device, orientation);
    }
  });

  encodeButton.addEventListener('click', () => {
    const text = encodeInput.value.trim(); 
    if (text) {
      
      navigator.clipboard.writeText(text)
        .then(() => {
          console.log('URL copied to clipboard');
  
          // Show a quick popup
          const popup = document.createElement('div');
          popup.textContent = 'Copied to clipboard!';
          popup.className = 'popup';
          document.body.appendChild(popup);
  
          // Fade away the popup after 2 seconds
          setTimeout(() => {
            popup.classList.add('fade-away');
            setTimeout(() => {
              document.body.removeChild(popup);
            }, 500); // wait for the fade animation to finish
          }, 2000);
        })
        .catch((error) => {
          console.error('Failed to copy URL to clipboard:', error);
        });
    }
  });
  
  copyButton.addEventListener('click', () => {
    const url = urlInput.value.trim();
    const device = deviceSelect.value;
    const orientation = orientationSelect.value;
  
    if (url && device && orientation) {
      const generatedUrl = `https://smthubakgale.github.io/Resposinator/?orientation=${orientation}&tevroc=true&url=${encodeURIComponent(url)}`;
  
      navigator.clipboard.writeText(generatedUrl)
        .then(() => {
          console.log('URL copied to clipboard');
  
          // Show a quick popup
          const popup = document.createElement('div');
          popup.textContent = 'Copied to clipboard!';
          popup.className = 'popup';
          document.body.appendChild(popup);
  
          // Fade away the popup after 2 seconds
          setTimeout(() => {
            popup.classList.add('fade-away');
            setTimeout(() => {
              document.body.removeChild(popup);
            }, 500); // wait for the fade animation to finish
          }, 2000);
        })
        .catch((error) => {
          console.error('Failed to copy URL to clipboard:', error);
        });
    }
  });

  deviceSelect.addEventListener('change', () => {
    const url = urlInput.value.trim();
    const device = deviceSelect.value;
    const orientation = orientationSelect.value;
    if (url && device && orientation) {
      renderDevice(url, device, orientation);
    }
  });

  orientationSelect.addEventListener('change', () => {
    const url = urlInput.value.trim();
    const device = deviceSelect.value;
    const orientation = orientationSelect.value;
    if (url && device && orientation) {
      renderDevice(url, device, orientation);
    }
  });

  function renderDevice(url, device, orientation) {
    deviceContainer.innerHTML = '';
    const deviceElement = document.createElement('div');
    deviceElement.classList.add('device');
    const deviceWidth = getDeviceWidth(device, orientation);
    const deviceHeight = getDeviceHeight(device, orientation);
    deviceContainer.style.width = `${deviceWidth + 40}px`;
    deviceContainer.style.height = `${deviceHeight + 80}px`;
    deviceElement.style.width = `${deviceWidth}px`;
    deviceElement.style.height = `${deviceHeight}px`;
    deviceElement.innerHTML = `
      <h2>${device} (${orientation})</h2>
      <div class="frame">
         <iframe src="${url}" width="${deviceWidth}" height="${deviceHeight}"></iframe>
      </div>
    `;
    deviceContainer.appendChild(deviceElement);
  }

  function getDeviceWidth(device, orientation) {
    switch (device) {
      case 'iPhone 12':
        return orientation === 'portrait' ? 390 : 844;
      case 'iPhone 12 Pro':
        return orientation === 'portrait' ? 390 : 844;
      case 'Samsung Galaxy S21':
        return orientation === 'portrait' ? 360 : 800;
      case 'Samsung Galaxy S21 Ultra':
        return orientation === 'portrait' ? 400 : 900;
      case 'iPad Air':
        return orientation === 'portrait' ? 820 : 1180;
      case 'iPad Pro':
        return orientation === 'portrait' ? 1024 : 1366;
      case 'Google Pixel 4':
        return orientation === 'portrait' ? 360 : 720;
      case 'Google Pixel 4 XL':
        return orientation === 'portrait' ? 400 : 840;
      default:
        return orientation === 'portrait' ? 360 : 640;
    }
  }

  function getDeviceHeight(device, orientation) {
    switch (device) {
      case 'iPhone 12':
        return orientation === 'portrait' ? 844 : 390;
      case 'iPhone 12 Pro':
        return orientation === 'portrait' ? 844 : 390;
      case 'Samsung Galaxy S21':
        return orientation === 'portrait' ? 800 : 360;
      case 'Samsung Galaxy S21 Ultra':
        return orientation === 'portrait' ? 900 : 400;
      case 'iPad Air':
        return orientation === 'portrait' ? 1180 : 820;
      case 'iPad Pro':
        return orientation === 'portrait' ? 1366 : 1024;
      case 'Google Pixel 4':
        return orientation === 'portrait' ? 720 : 360;
      case 'Google Pixel 4 XL':
        return orientation === 'portrait' ? 840 : 400;
      default:
        return orientation === 'portrait' ? 640 : 360;
    }
  }

  const url = urlInput.value.trim();
  const device = deviceSelect.value;
  const orientation = orientationSelect.value;
  if (url && device && orientation) {
    renderDevice(url, device, orientation);
  }
});
