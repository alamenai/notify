<div align="center">
  <img src="Logo.svg"> 
  <h1>Notify</h1>
  <h5>I want to be your :heart: notification in your React application</h5>

---

<span>Push Notification is one of the most components that I love, but unfortunately, when I started looking for <b>well designed</b>, <b>flexible</b>, <b>customizable</b>, and <b>easy-to-use</b> one, I did not find a one that fits my needs and delight users, so I decided to design and develop Notify.
</span>

[Demo](https://q3934.csb.app/) • 
[Chat](https://spectrum.chat/users/menai-ala-eddine) • 
[Contribute](https://github.com/MenaiAla/notify/pulls) 

</div>

--- 
</div>

### Introduction

Notify is a React component for displaying out-of-the-box notifications in your application.

Notify is meant to be _well designed_, _compatible_, _lightwhite_, _customizable_ and _easy to use_.

### Features

- [x] Creative design.

- [x] Lightwhite.

- [x] Customizable.

- [x] Easy to use.

- [x] Extensive.

[Request Feature →](https://github.com/MenaiAla/notify/pulls)

### Installation

To get started with Notify, you can simply install it via npm.

```command
npm install react-notify
```

### Basic Usage

To add Notify in your application, you need to import it from its package and define the **required** properties.

```Javascript
import Notify from "react-notify";

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

You can customize your `type` and `styles`.

```Javascript
import Notify from "react-notify";

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

Don't worry, we breath the  Dark Mode too. You need to add just `darkmode` property.

```Javascript
return (<Notify {...props} darkmode/>)
```

### API reference
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
</table>

### Next Release

Notify started simple and minimal, but it needs your feedback to add more features and fix current bugs.

- [ ] Add customizable media ( image, video) feature.

- [ ] Add customizable position feature.

- [ ] Add customizable background color feature.

[Request feature →](https://github.com/MenaiAla/notify/pulls)

---
<h1 align="center">Thank you</h1>

---