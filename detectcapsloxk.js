function enterInput(e) {
  var flag = e.getModifierState("CapsLock");
  if (flag) {
    document.getElementById("feedback").innerHTML = "CapsLock activated";
  } else {
    document.getElementById("feedback").innerHTML = "CapsLock not activated";
  }
}
