function getSelf(callback) {
  $.ajax({
    type: "GET",
    url: "/user/me",
    headers: {
      authorization: `Bearer ${(localStorage, getItem("token"))}`,
    },
    success: function (response) {
      callback(response.user);
    },
    error: function (xhr, status, error) {
      if (status == 401) {
        alert("Login needed");
      } else {
        localStorage.clear();
        alert(" wtf");
      }
      window.location.href = "/";
    },
  });
}
