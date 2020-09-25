import app from './app/app';

app.listen(process.env.APP_PORT || 3001, () => {
  console.log(`Server runing on port ${process.env.APP_PORT || 3001}.`);
});
