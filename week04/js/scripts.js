// const getString = window.location.search;
// console.log(getString);

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

// console.log(myInfo.get('first'));
// console.log(myInfo.get('last'));
// console.log(myInfo.get('ordinance'));
// console.log(myInfo.get('date'));
// console.log(myInfo.get('location'));
// console.log(myInfo.get('phone'));
// console.log(myInfo.get('email'));

document.querySelector('#results').innerHTML = `
<h2>Application Submitted Successfully!</h2>
<p>Thank you ${myInfo.get('first')} ${myInfo.get('last')} for your application to the Middle-Earth Chamber of Commerce.</p>
<p><strong>Organizational Title:</strong> ${myInfo.get('org-title')}</p>
<p><strong>Email:</strong> ${myInfo.get('email')}</p>
<p><strong>Phone:</strong> ${myInfo.get('phone')}</p>
<p><strong>Business Name:</strong> ${myInfo.get('business-name')}</p>
<p><strong>Membership Level:</strong> ${myInfo.get('membership')}</p>
<p><strong>Description:</strong> ${myInfo.get('description')}</p>
<p><strong>Application Date:</strong> ${new Date(myInfo.get('timestamp')).toLocaleDateString()}</p>
`