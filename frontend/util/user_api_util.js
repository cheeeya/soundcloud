
export const fetchUserData = profile_url => (
  $.ajax({
    method: 'GET',
    url: `api/users/${profile_url}`
  })
);

export const updateUserData = (formData, user_id) => (
  $.ajax({
    method: "PATCH",
    url: `api/users/${user_id}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  })
);

export const fetchAllUsers = () => (
  $.ajax({
    method: 'GET',
    url: 'api/users'
  })
);
