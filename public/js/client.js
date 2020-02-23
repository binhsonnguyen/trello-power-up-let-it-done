const BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421';

const GRAY_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg';

const onBtnClick = function (t, opts) {
    console.log('Someone clicked the button');
};

window.TrelloPowerUp.initialize({
    'card-buttons': function (t, opts) {
        return [{
            // usually you will provide a callback function to be run on button click
            // we recommend that you use a popup on click generally
            icon: GRAY_ICON, // don't use a colored icon here
            text: 'Open Popup',
            callback: onBtnClick,
            condition: 'edit'
        }, {
            // but of course, you could also just kick off to a url if that's your thing
            icon: GRAY_ICON,
            text: 'Just a URL',
            condition: 'always',
            url: 'https://developers.trello.com',
            target: 'Trello Developer Site' // optional target for above url
        }];
    }
});