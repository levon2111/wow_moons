// import { NextApiRequest, NextApiResponse } from 'next';
//
// const sgMail = require('@sendgrid/mail');
//
// export default async function SendEmail(req: NextApiRequest, res: NextApiResponse) {
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//
//   const { subject, description, email, name } = req.body;
//   const referer = req.headers.referer;
//
//   const content = {
//     to: ['contact@bstefanski.com'],
//     from: 'contact@bstefanski.com',
//     subject: subject,
//     text: description,
//     html: `<div>
//     <h1>Name: ${name}</h1>
//     <h1>E-mail: ${email}</h1>
//     <p>${description}</p>
//     <p>Sent from: ${referer || 'Not specified or hidden'}`,
//   };
//
//   try {
//     await sgMail.send(content);
//     res.status(204).end();
//   } catch (error) {
//     console.log('ERROR', error);
//     res.status(400).send({ message: error });
//   }
// }

import formData from 'form-data';
import Mailgun from 'mailgun.js';
import { NextApiRequest, NextApiResponse } from 'next';
import { InputFormData } from 'mailgun.js/interfaces/IFormData';
const domain = process.env.MAILGUN_DOMAIN as string;
const key = process.env.MAILGUN_API_KEY as string;
const mailgunFrom = process.env.MAILGUN_FROM as string;
const mailgunTo = process.env.MAILGUN_TO as string;

interface EmailPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  message: string;
}

export default async function SendEmail(req: NextApiRequest, res: NextApiResponse) {
  // @ts-ignore
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: 'api',
    key,
  });

  const { subject, message, email, name, company, serviceType, phone } = req.body as EmailPayload & { subject: string };
  const referer = req.headers.referer;

  const content = {
    to: [mailgunTo],
    from: mailgunFrom,
    subject: subject,
    text: message,
    html: `<div>
    <h1>Name: ${name}</h1>
    <h1>E-mail: ${email}</h1>
    <p>Phone: ${phone}</p>
    <p>Company Name: ${company}</p>
    <p>Service Type: ${serviceType}</p>
    <p>Message: ${message}</p>
    <p>Sent from: ${referer || 'Not specified or hidden'}`,
  };

  try {
    const a = await mg.messages.create(domain, content);
    res.status(204).end();
  } catch (err) {
    console.log('ERROR', err);
    res.status(400).send({ message: err });
  }
}

// import mailgun from 'mailgun-js';
// import SomeEmailTemplate from '../../../emails/some-email-template.html';
// const mg = mailgun({
//   apiKey: process.env.MAILGUN_API_KEY as string,
//   domain: process.env.MAILGUN_DOMAIN!,
// });
// const someAPIRoute = async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     await mg.messages().send({
//       from: `youremail@email.com`,
//       to: ['someemail@email.com'],
//       subject: 'This is an email template hosted in our NextJS project!',
//       html: SomeEmailTemplate,
//     });
//   } catch (error) {
//     console.error(`Error sending email: `, error);
//   }
//   // ...continue
// };

//  VERSION WITH SENDGRID
// const sgMail = require('@sendgrid/mail');
//
// export default async function SendEmail(req: NextApiRequest, res: NextApiResponse) {
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//
//   const { subject, description, email, name } = req.body;
//   const referer = req.headers.referer;
//
//   const content = {
//     to: ['deren.kha@gmail.com'],
//     from: 'deren.kha@gmail.com',
//     subject: subject,
//     text: description,
//     html: `<div>
//     <h1>Name: ${name}</h1>
//     <h1>E-mail: ${email}</h1>
//     <p>${description}</p>
//     <p>Sent from: ${referer || 'Not specified or hidden'}`,
//   };
//
//   try {
//     await sgMail.send(content);
//     res.status(204).end();
//   } catch (error) {
//     console.log('ERROR', error);
//     res.status(400).send({ message: error });
//   }
// }
