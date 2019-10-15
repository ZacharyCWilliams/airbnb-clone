export const fetchHomes = () => (
  $.ajax({
    method: "GET",
    url: "api/homes"
  })
)

export const fetchHome = home => (
  $.ajax({
    method: "GET",
    url: `api/homes/${home}`,
    data: { home }
  })
)

export const createHome = home => (
  $.ajax({
    method: "POST",
    url: "api/homes",
    data: home,
    contentType: false,
    processData: false
  })
)

export const updateHome = home => (
  $.ajax({
    method: "PATCH",
    url: `api/homes/${home.id}`,
    data: { home }
  })
)

export const deleteHome = home => (
  $.ajax({
    method: "DELETE",
    url: `api/homes/${home}`,
    data: { home }
  })
)

