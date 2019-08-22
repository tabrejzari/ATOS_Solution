console.log('trying to fetch');

fetch('https://na.stage.gillette.com/nanwizard')

    .then((res) => {

        console.log('fetched');

        return res.text();

    })

    .then((res) => {

        res = res.replace(/\/Content\/css\/fonts.css/g, 'https://na.stage.gillette.com/Content/css/fonts.css');

        res = res.replace(/\/Content\/css\/bootstrap.css/g, 'https://na.stage.gillette.com/Content/css/bootstrap.css');

        res = res.replace(/\/Content\/css\/carouselStyle.css/g, 'https://na.stage.gillette.com/Content/css/carouselStyle.css');

        res = res.replace(/\/Content\/css\/ROM.css/g, 'https://na.stage.gillette.com/Content/css/ROM.css');

        res = res.replace(/\/Content\/Wizard\/css\/nawizard.css/g, 'https://na.stage.gillette.com/Content/Wizard/css/nawizard.css');

        res = res.replace(/\/Scripts\/Wizard\/js\/gillette.net.min.js/g, 'https://na.stage.gillette.com/Scripts/Wizard/js/gillette.net.min.js');

        res = res.replace(/\/Content\/Wizard\/images\/icon\/icon_order_razor.png/g, 'https://na.stage.gillette.com/Content/Wizard/images/icons/icon_order_razor.png');

        

        const iframe = document.querySelector('#srcdoc-iframe');
        iframe.srcdoc = res;
		
		iframe.contentWindow.location = "https://na.stage.gillette.com/";

    })

    .catch((err) => {

        console.log('error', err);

    });