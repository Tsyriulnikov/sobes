//check web storage browser support
if (typeof Storage !== "undefined") {
  // Code for localStorage/sessionStorage.
} else {
  // Sorry! No Web Storage support..
}

//check web workers browser support
if (typeof Worker !== "undefined") {
  // code for Web worker support.
} else {
  // Sorry! No Web Worker support..
}

if (typeof EventSource !== "undefined") {
  // Server-sent events supported. Let's have some code here!
} else {
  // No server-sent events supported
}
