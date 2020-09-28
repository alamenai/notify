<div align="center">
  <img src="./Logo.svg"> 
  <h1>React Push Notify</h1>
  <h3>I want to be your :heart: notification in your React application</h3>

---

<span>React Push Notify is React-based component for displaying push notifications in the browser. React Push Notify is meant to be _well designed_, _compatible_, _lightwhite_, _customizable_ and _easy to use_.
</span>

[Download](https://www.npmjs.com/package/react-push-notify) • 
[Demo](https://eejv4.csb.app/) • 
[Chat](https://spectrum.chat/users/menai-ala-eddine) • 
[Contribute](https://github.com/MenaiAla/react-push-notify/pulls) 

</div>

</div>

### Intro
---

When I started looking for _well designed_, _compatible_, _lightwhite_, _customizable_ and _easy to use_ push notification for my React applications that fits my needs and delight the users, I did not find a one that requires only **one line of code**. So, I decided to design and develop React Push Notify for displaying out-of-the-box push notifications.


### Features
---

- [x] Creative design.

- [x] Lightwhite.

- [x] Customizable.

- [x] Easy to use.

- [x] Extensive.

[Request Feature →](https://github.com/MenaiAla/react-push-notify/pulls)

### Installation
---

To get started with React Push Notify, you can simply install it via npm.

```
npm install @ala_eddine/react-push-notify
```

[Discover on npm →](https://www.npmjs.com/package/react-push-notify)

### Basic Usage
---

To add React Push Notify in your application, you need to import it from its package and define the **required** properties.

```Javascript
import Notify from "@ala_eddine/react-push-notify";

const Notification = () => {

const data = {
  title: "Notify updates",
  subtitle: "Stay tuned with Notify",
  message: "I want to hear your feedback."
};

const action = {
  name: "Star",
  event: () => alert("Thank you for your star")
};

const props = { data, action };

return (<Notify {...props} />);

```
[Show me →](https://codesandbox.io/s/q3934)


### Advanced Usage
---

You can customize your `type` and `styles`.

```Javascript
import Notify from "@ala_eddine/react-push-notify";

const Notification = () => {

const data = {
  title: "Notify updates",
  subtitle: "Stay tuned with Notify",
  message: "I want to hear your feedback."
};

const style = {
  rounded: true,
  animation: "bottom2up",
  duration: 1
}

const action = {
  name: "Star",
  event: () => alert("Thank you for your star")
};

const type = "success";

const props = { type, data, style, action };

return (<Notify {...props} />);

```

#### What about the Dark Mode?

Don't worry, the  Dark Mode is included too. You need to add just `darkmode` property.

```Javascript
return (<Notify {...props} darkmode/>)
```
### Media Usage
> New feature included to 0.2.0

Now, you can include a Media (image, video) to your Notification.

```js
        <Notify {...props} darkmode >
            <Media src={MEDIA_PATH} link={LINK} />
        </Notify>
```

[Show me →](https://codesandbox.io/s/q3934)

### API reference
---

<table width="100%">

<tr align="center">
<th>
Props
</th>
<th>
Type
</th>
<th>
Required
</th>
<th>
Dynamic
</th>
<th>
Default
</th>
<th>
Keys
</th>
<th>
Alternatives
</th>
</tr>

<tr align="center">
<td>
type
</td>
<td>
string
</td>
<td>
</td>
<td>
•
</td>
<td>
info
</td>
<td>
</td>
<td>
success | error | warning
</td>
</tr>


<tr align="center">
<td>
data
</td>
<td>
object
</td>
<td>
 •
</td>
<td>
•
</td>
<td>
</td>
<td>
title: string

subtitle: string

message: string

</td>
<td>
</td>
</tr>


<tr align="center">
<td>
style
</td>
<td>
object
</td>
<td>
</td>
<td>
•
</td>
<td>
rounded: false

animation: "left2right"

duration: 2

</td>
<td>
rounded: boolean

animation: string

duration: string

</td>
<td>
</td>
</tr>



<tr align="center">
<td>
action
</td>
<td>
object
</td>
<td>
•
</td>
<td>
•
</td>
<td>
</td>
<td>
name: string

event: function

</td>
<td>
</td>
</tr>


<tr align="center">
<td>
autohide
</td>
<td>
boolean
</td>
<td>

</td>
<td>
•
</td>
<td>
false
</td>
<td>
-
</td>
<td>
true
</td>
</tr>
</table>

### Changelog
---
[Changelog](/CHANGELOG.md).

### Licence
---
[MIT](/LICENSE).