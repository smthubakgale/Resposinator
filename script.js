const urlInput = document.getElementById('url-input');
const deviceSelect = document.getElementById('device-select');
const goButton = document.getElementById('go-button');
const deviceContainer = document.getElementById('device-container');

goButton.addEventListener('click', () => {
  const url = urlInput.value.trim();
  const device = deviceSelect.value;
  if (url && device) {
    renderDevice(url, device);
  }
});

function renderDevice(url, device) {
  deviceContainer.innerHTML = '';
  const deviceElement = document.createElement('div');
  deviceElement.classList.add('device');
  const deviceWidth = getDeviceWidth(device);
  const deviceHeight = getDeviceHeight(device);
  deviceElement.innerHTML = `
    <h2>${device}</h2>
    <iframe src="${url}" width="${deviceWidth}" height="${deviceHeight}"></iframe>
  `;
  deviceContainer.appendChild(deviceElement);
}

function getDeviceWidth(device) {
  switch (device) {
    case 'iPhone 12':
      return 390;
    case 'iPhone 12 Pro':
      return 390;
    case 'Samsung Galaxy S21':
      return 360;
    case 'Samsung Galaxy S21 Ultra':
      return 400;
    case 'iPad Air':
      return 820;
    case 'iPad Pro':
      return 1024;
    case 'Google Pixel 4':
      return 360;
    case 'Google Pixel 4 XL':
      return 400;
    case 'OnePlus 8':
      return 390;
    case 'OnePlus 8 Pro':
      return 440;
    case 'Huawei P30':
      return 360;
    case 'Huawei P30 Pro':
      return 400;
    default:
      return 390;
  }
}

function getDeviceHeight(device) {
  switch (device) {
    case 'iPhone 12':
      return 844;
    case 'iPhone 12 Pro':
      return 844;
    case 'Samsung Galaxy S21':
      return 800;
    case 'Samsung Galaxy S21 Ultra':
      return 900;
    case 'iPad Air':
      return 1180;
    case 'iPad Pro':
      return 1366;
    case 'Google Pixel 4':
      return 720;
    case 'Google Pixel 4 XL':
      return 840;
    case 'OnePlus 8':
      return 840;
    case 'OnePlus 8 Pro':
      return 940;
    case 'Huawei P30':
      return 720;
    case 'Huawei P30 Pro':
      return 840;
    default:
      return 844;
  }
}
