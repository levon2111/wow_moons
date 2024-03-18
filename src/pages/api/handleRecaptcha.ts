import { NextApiRequest, NextApiResponse } from 'next';

const handleRecaptcha = (req: NextApiRequest, res: NextApiResponse) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  try {
    fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${req.body.token}`,
    })
      .then((captchaRes) => captchaRes.json())
      .then((captchaRes) => {
        if (captchaRes?.score >= 0.3) {
          res.status(200).json({
            status: 'success',
            message: 'Form submitted successfully',
          });
        } else {
          res.status(200).json({
            status: 'failed',
            message: 'Google ReCaptcha Failed',
          });
        }
      });
  } catch (err) {
    res.status(405).json({
      status: 'failed',
      message: 'Error submitting form',
    });
  }
};

export default handleRecaptcha;
