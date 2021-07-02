<!-- Tell us about your solution here -->

## Solution
### host
App.tsx
 * localStroage - is used to keep the state of the color on refresh.
 * Checks localstorage and sets the color state based off of that value.
 * handleColorChange() - is passed in to the colorPicker where that prop will be updated based off of the user choosing their color.
 * Once the user selects a color the local storage is updated `(UseEffect((),[color])` and passed down to the Iframe component (chatBotIframe.tsx).

ChatBotIframe.tsx - recieves the color from the state
 * onLoad - loads the initial color at the begging of the application.
 * useEffect - posts a message to the Iframe with the new color that the user has chosen.

### Chat-button
* Added an event listener to recieve the message/color from the host.
* Once the message is recieved the state of the color is updated and set in an inline style.

## Extras
* Added a navigation bar that also changes the color of the text of Memberstack for fun.
* centered color picker and added text. Added some flex-box in the styles.
* I kept vanilla css styles for a quicker dev process, but I would have broken them up more based on their components (would have probably added scss).
* Interfaces for typescript are nice to keep in a global folder for use across multiple components on bigger projects.