const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

const submitNetlifyForm = async (formName, data) => {
  const res = await fetch('/__forms.html', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': formName, ...data }),
  });
  if (!res.ok) throw new Error('Form submission failed');
  return res;
};

export const submitContact = (data) => submitNetlifyForm('contact', data);
export const submitAppointment = (data) => submitNetlifyForm('appointment', data);
export const subscribeNewsletter = (data) => submitNetlifyForm('newsletter', data);
