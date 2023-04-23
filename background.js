browser.webRequest.onBeforeSendHeaders.addListener(data => {
	for (let header of data.requestHeaders) {
		if (header.name.toLowerCase() === 'user-agent') {
			header.value = navigator.userAgent.split('Gecko')[0] + 'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1700.00';
		}
		if (header.name.toLowerCase() === 'sec-ch-ua') {
			header.value = '"Chromium";v="112", "Microsoft Edge";v="112", "Not:A-Brand";v="99"';
		}
	}
	return { requestHeaders: data.requestHeaders };
}, { urls: ['https://*.bing.com/*'] }, ['blocking', 'requestHeaders']);