<div align="center">
  <img src="./Logo.svg"> 
  <h1>Notify</h1>
  <h3>Notification component made easy for your react project</h3>

---

<span>Notify is React-based component for displaying push notifications in the browser. 

Notify is meant to be _well designed_, _compatible_, _lightwhite_, _customizable_ and _easy to use_.
</span>

[Download](https://www.npmjs.com/package/react-push-notify) • 
[Demo](https://eejv4.csb.app/) • 
[Chat](https://spectrum.chat/users/menai-ala-eddine) • 
[Contribute](https://github.com/MenaiAla/react-push-notify/pulls) 

</div>
<br>
<br>

<h2 align="center">Quick Intro</h2>

When I started looking for _well designed_, _compatible_, _lightwhite_, _customizable_ and _easy to use_ push notification for my React applications that fits my needs and delight the users, I did not find a one that requires only **one line of code**. So, I decided to design and develop Notify for displaying out-of-the-box push notifications.

<br>
<h2 align="center">Features</h2>

- [x] Creative design.

- [x] Lightwhite.

- [x] Customizable.

- [x] Easy to use.

- [x] Extensive.

<div align="center">

[![Request Feature](https://readme-components.vercel.app/api?component=button&text=Request+New+Feature)](https://github.com/MenaiAla/react-push-notify/pulls)

</div>

<br>
<h2 align="center">Installation</h2>

To get started with Notify, you can simply install it via npm.

```
npm install @ala_eddine/react-push-notify
```
<br>
<div align="center">

[![Discover on npm](https://readme-components.vercel.app/api?component=button&text=Discover+on+npm)](https://www.npmjs.com/package/react-push-notify)

</div>

<br>
<h2 align="center">Basic Usage</h2>

To add Notify in your application, you need to import it from its package and define the **required** properties.

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

<br>

<div align="center">

[![Show me →](https://readme-components.vercel.app/api?component=button&text=Show+Live+Demo+)](https://codesandbox.io/s/q3934)

</div>


<br>
<h2 align="center">Advanced Usage</h2>

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
<br>
<h2 align="center">What about the Dark Mode?</h2>

Don't worry, the  **Dark Mode** is included too. You need to add just `darkmode` property.

```Javascript
return (<Notify {...props} darkmode/>)
```

<br>
<h2 align="center">Media Usage</h2>

Now, you can include a Media (image, video) to your Notification.

```js
        <Notify {...props} darkmode >
            <Media src={MEDIA_PATH} link={LINK} />
        </Notify>
```

<br>

<div align="center">

[![Show me →](https://readme-components.vercel.app/api?component=button&text=Show+Live+Demo+)](https://codesandbox.io/s/q3934)

</div>

<br>
<h2 align="center">API reference</h2>

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
-
</td>
<td>
yes
</td>
<td>
info
</td>
<td>
-
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
 yes
</td>
<td>
yes
</td>
<td>
-
</td>
<td>
title: string

subtitle: string

message: string

</td>
<td>
-
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
-
</td>
<td>
yes
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
-
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
yes
</td>
<td>
yes
</td>
<td>
-
</td>
<td>
name: string

event: function

</td>
<td>
-
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
yes
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
