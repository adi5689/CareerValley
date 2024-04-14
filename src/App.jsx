import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import RegistrationModal from './components/RegistrationModal';
import Footer from './components/Footer';
import ExplorePrograms from './components/ExplorePrograms';
import WelcomeComponent from './components/WelcomeComponent';
import StreamSlider from './components/streamSlider';
import TopUniversities from './components/TopUniversities';
import NewsletterSubscribe from './components/NewsletterSubscribe';
import ContactUs from './components/ContactUs';


const data = [
  {
     stream: 'Management',
     colleges: 10,
     svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-255 347 100 100" xml:space="preserve"><path fill="#3D61AC" d="M-225.9 405.5v11.3c0 .4-.3.8-.8.8h-1.5c-.4 0-.8-.3-.8-.8v-11.3c0-.4.3-.8.8-.8h1.5c.5.1.8.4.8.8zm8.4-.7h-1.5c-.4 0-.8.3-.8.8v11.3c0 .4.3.8.8.8h1.5c.4 0 .8-.3.8-.8v-11.3c-.1-.5-.4-.8-.8-.8zm9.1-8.2h-1.5c-.4 0-.8.3-.8.8v19.5c0 .4.3.8.8.8h1.5c.4 0 .8-.3.8-.8v-19.5c0-.5-.4-.8-.8-.8zm9.1-6.4h-1.5c-.4 0-.8.3-.8.8v25.9c0 .4.3.8.8.8h1.5c.4 0 .8-.3.8-.8V391c0-.5-.3-.8-.8-.8zm9.2 6.4h-1.5c-.4 0-.8.3-.8.8v19.5c0 .4.3.8.8.8h1.5c.4 0 .8-.3.8-.8v-19.5c-.1-.5-.4-.8-.8-.8zm9.1-10.1h-1.5c-.4 0-.8.3-.8.8v29.5c0 .4.3.8.8.8h1.5c.4 0 .8-.3.8-.8v-29.5c0-.4-.4-.8-.8-.8z" style="fill: rgb(61, 97, 172);"></path><path fill="#ff6c00" d="M-181.8 376.3c-1.2 0-2.2 1-2.2 2.2 0 .5.1.9.4 1.2l-6.7 9.6c-.2-.1-.4-.1-.7-.1-.5 0-1 .2-1.4.5l-5.6-4.1c0-.2.1-.3.1-.5 0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2 0 .2 0 .4.1.6l-6.1 4.8c-.3-.1-.6-.2-.9-.2-1.2 0-2.2 1-2.2 2.2l-5.5 2.9c-.4-.3-.9-.5-1.4-.5-.8 0-1.5.5-1.9 1.1l-5.1-.8c-.2-1-1.1-1.7-2.1-1.7-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2.8 0 1.5-.5 1.9-1.1l5.1.8c.2 1 1.1 1.7 2.1 1.7 1.2 0 2.2-1 2.2-2.2v-.3l5.3-2.8c.4.5 1 .7 1.6.7 1.2 0 2.2-1 2.2-2.2 0-.3-.1-.6-.2-.9l5.9-4.6c.3.2.8.4 1.2.4.5 0 .9-.2 1.3-.4l5.7 4.1v.4c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2c0-.4-.1-.8-.3-1.1l6.7-9.6c.2 0 .4.1.5.1 1.2 0 2.2-1 2.2-2.2 0-1.5-1-2.4-2.2-2.4z" style="fill: rgb(34, 177, 188);"></path></svg>',
     courses: ['MBA', 'BBA', 'Executive MBA'],
  },
  {
     stream: 'Engineering',
     colleges: 15,
     svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="-255 347 100 100" xml:space="preserve"><path fill="#3B61AD" d="M-198.4 396.3c3.7-2.3 6.2-6.4 6.2-11.1 0-.4 0-.8-.1-1.3h5.1c.6 0 1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1h-5.5l-2.7-11.1c-.3-1.1-.9-2-1.9-2.5-1-.6-2.1-.7-3.2-.4l-4.8 1.4-4.8-1.4c-1.1-.3-2.2-.2-3.2.3s-1.7 1.4-1.9 2.5l-2.8 11.1h-5.6c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1h5.1c0 .4-.1.8-.1 1.3 0 7.2 5.9 13.1 13.1 13.1 2.7.1 5.1-.6 7.1-1.9M-212 370c.4-.2.9-.3 1.4-.1l5.1 1.5c.2.1.4.1.7 0l5.1-1.5c.5-.1.9-.1 1.4.1.4.2.7.6.8 1.1l2.5 10.5h-20.4l2.7-10.5c0-.4.3-.8.7-1.1zm17.5 15.2c0 5.9-4.8 10.8-10.8 10.8-5.9 0-10.8-4.8-10.8-10.8 0-.4 0-.8.1-1.3h21.4c0 .5.1.9.1 1.3z" style="fill: rgb(59, 97, 173);"></path><path fill="#ff6c00" d="M-189.5 407.5c-.1-.1-.2-.1-.2-.2-2-1.6-4.2-2.9-6.6-3.8-.1 0-.1-.1-.2-.1-2.5-.9-5.1-1.5-7.9-1.6-.2-.3-.5-.5-.9-.5s-.7.2-.9.5c-2.8.1-5.4.7-7.9 1.6-.1 0-.1 0-.2.1-2.4.9-4.6 2.2-6.6 3.8-.1.1-.2.1-.2.2-5.6 4.6-9.2 11.5-9.2 19.3 0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1 0-6.2 2.5-11.8 6.6-15.9V426.8c.1.5.6.9 1.1.9.5 0 1-.4 1.1-.9v-17.9c1.3-1 2.7-1.9 4.2-2.6v9.6c0 .6.5 1.1 1.1 1.1h17c.6 0 1.1-.5 1.1-1.1v-9.6c1.5.7 2.9 1.6 4.2 2.6v17.9c.1.5.6.9 1.1.9.5 0 1-.4 1.1-.9V410.9c4.1 4.1 6.6 9.7 6.6 15.9 0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1c.4-7.8-3.2-14.7-8.8-19.3zm-8.5 7.2h-14.7v-9.4c2-.7 4-1.1 6.2-1.2v3c0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1v-3c2.2.1 4.2.5 6.2 1.2v9.4zm2.3 5.8c0 .6-.5 1.1-1.1 1.1h-9.4c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h9.4c.6-.1 1.1.4 1.1 1.1zm-13.9 0c0 .6-.5 1.1-1.1 1.1h-3.1c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h3.1c.6-.1 1.1.4 1.1 1.1z" style="fill: rgb(34, 177, 188);"></path></svg>',
     courses: ['BTech/BE', 'Diploma', 'MTech/ME'],
  },
  {
     stream: 'Commerce',
     colleges: 8,
     svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="-255 347 100 100" xml:space="preserve"><path fill="#3B61AD" d="m-189.7 379-5.9 5.9H-228l6.2 9.1 5.5 8h15.4l-1.6 5.2H-215c-1.7.1-3 1.5-3 3.3 0 1.8 1.5 3.3 3.3 3.3 1.8 0 3.3-1.5 3.3-3.3 0-.7-.2-1.3-.5-1.8h5.5c-.3.5-.5 1.1-.5 1.8 0 1.8 1.5 3.3 3.3 3.3 1.8 0 3.3-1.5 3.3-3.3 0-.8-.3-1.6-.8-2.1l7-22.7 5.2-5.2h6.1V379h-6.9zm-25.8 21.5-4.1-6h16.2V393h-17.2l-4.5-6.6h29.1l-4.3 14.1h-15.2zm2.5 10c0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8.8-1.8 1.8-1.8 1.8.8 1.8 1.8zm9.3 1.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8c-.1 1-.9 1.8-1.8 1.8z" style="fill: rgb(59, 97, 173);"></path><path fill="#ff6c00" d="M-215 407.2c-1.7.2-3 1.6-3 3.3 0 1.8 1.5 3.3 3.3 3.3 1.8 0 3.3-1.5 3.3-3.3 0-.7-.2-1.3-.5-1.8h5.5c-.3.5-.5 1.1-.5 1.8 0 1.8 1.5 3.3 3.3 3.3 1.8 0 3.3-1.5 3.3-3.3 0-.8-.3-1.6-.8-2.1l-13.9-1.2zm2 3.3c0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8.8-1.8 1.8-1.8 1.8.8 1.8 1.8zm9.3 1.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8z" style="fill: rgb(34, 177, 188);"></path></svg>',
     courses: ['BCom', 'MCOM'],
  },
  {
     stream: 'Arts',
     colleges: 12,
     svg: '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="-255 347 100 100" xml:space="preserve"><style>.st0{fill:#22b1bc}</style><path class="st0" fill="#3B61AD" d="M-192.2 401.8c.9 0 1.8-.4 2.5-1s1-1.6 1-2.5c0-.9-.4-1.8-1-2.5-.7-.7-1.6-1-2.5-1s-1.8.4-2.5 1c-.7.7-1 1.6-1 2.5 0 .9.4 1.8 1 2.5.6.6 1.5 1 2.5 1zm-1.4-4.9c.4-.4.9-.6 1.4-.6.5 0 1 .2 1.4.6.4.4.6.9.6 1.4 0 .5-.2 1-.6 1.4-.7.7-2 .7-2.8 0-.4-.4-.6-.9-.6-1.4 0-.6.2-1.1.6-1.4zM-197.3 410.7c.9 0 1.8-.4 2.5-1 .7-.7 1-1.6 1-2.5 0-.9-.4-1.8-1-2.5-.7-.7-1.6-1-2.5-1s-1.8.4-2.5 1c-.7.7-1 1.6-1 2.5 0 .9.4 1.8 1 2.5.7.6 1.6 1 2.5 1zm-1.3-4.9c.4-.4.9-.6 1.4-.6.5 0 1 .2 1.4.6.4.4.6.9.6 1.4 0 .5-.2 1-.6 1.4-.7.7-2 .7-2.8 0-.4-.4-.6-.9-.6-1.4 0-.6.2-1.1.6-1.4zM-208.6 409.6c-.7.7-1 1.6-1 2.5s.4 1.8 1 2.5c.7.7 1.6 1 2.5 1s1.8-.4 2.5-1c1.4-1.4 1.4-3.6 0-5-.7-.7-1.6-1-2.5-1-1 0-1.9.3-2.5 1zm3.8 3.9c-.7.7-2 .7-2.8 0-.4-.4-.6-.9-.6-1.4 0-.5.2-1 .6-1.4.4-.4.9-.6 1.4-.6.5 0 1 .2 1.4.6.8.8.8 2 0 2.8zM-214.9 403.7c-.9 0-1.8.4-2.5 1-.7.7-1 1.6-1 2.5s.4 1.8 1 2.5c.7.7 1.6 1 2.5 1s1.8-.4 2.5-1c1.4-1.4 1.4-3.6 0-5-.7-.7-1.6-1-2.5-1zm1.3 4.9c-.7.7-2 .7-2.8 0-.4-.4-.6-.9-.6-1.4 0-.5.2-1 .6-1.4.4-.4.9-.6 1.4-.6.5 0 1 .2 1.4.6.8.8.8 2 0 2.8zM-217.6 395.6c-.7-.7-1.6-1-2.5-1-.9 0-1.8.4-2.5 1-.7.7-1 1.6-1 2.5s.4 1.8 1 2.5c.7.7 1.6 1 2.5 1 .9 0 1.8-.4 2.5-1 1.4-1.4 1.4-3.6 0-5zm-1.2 3.9c-.7.7-2 .7-2.8 0-.4-.4-.6-.9-.6-1.4 0-.5.2-1 .6-1.4.4-.4.9-.6 1.4-.6.5 0 1 .2 1.4.6.8.8.8 2 0 2.8zM-211.4 383c-.9-.9-2-1.4-3.2-1.4-.9 0-1.7.3-2.3.9-1.4 1.4-1.2 3.8.5 5.5.9.9 2 1.4 3.2 1.4.9 0 1.7-.3 2.3-.9.7-.7 1-1.7.9-2.7-.1-1.1-.6-2-1.4-2.8zm-.6 4.4c-.4.4-.9.5-1.2.5-.7 0-1.5-.3-2-.9-1-1-1.2-2.5-.5-3.2.4-.4.9-.5 1.2-.5.7 0 1.5.3 2 .9.5.5.8 1.2.9 1.8.1.5-.1 1-.4 1.4z"></path><path fill="#ff6c00" d="M-179.1 373.2c-.2-.2-.5-.3-.7-.2l-3.6.8c-.2.1-1.5.4-2.1 1-.9.9-1.2 2.3-.8 3.5-.2 0-.5 0-.7.1l-5.7 4.5c-.2.1-.3.4-.3.6-.2 0-.4.1-.6.3l-3.5 3.8c-1.2.5-2.3 1.2-3.2 2.1-.6.6-1.5 1-2.4 1-.9 0-1.7-.3-2.4-1s-1-1.6-1-2.6v-.7c-.1-2.4-1.1-4.6-2.8-6.3-1.8-1.8-4.1-2.8-6.7-2.8-2 0-3.8.6-5.4 1.7-.5.3-.9.7-1.2 1-.1.1-.2.3-.4.4v.1l-.1.1c-8.8 8.8-8.8 23 0 31.8 4.2 4.3 9.9 6.6 15.9 6.6s11.7-2.3 15.9-6.6c4.3-4.3 6.7-10.1 6.6-16.3v-.2c-.1-2.4-1.1-4.6-2.8-6.3-.9-.9-1.9-1.6-3-2l.1-.1c.2-.1.3-.4.3-.6.2 0 .4-.1.6-.3l4.6-5.7c.1-.2.2-.4.2-.6.4.1.7.2 1.1.2.9 0 1.8-.4 2.4-1 .4-.5 1-2.4 1.8-5.7.2-.1.1-.4-.1-.6zm-13.8 12.4 1.4 1.4-13.4 12.3-.4.1.1-.4 9.3-10.1 3-3.3zm5 5.2c1.4 1.4 2.2 3.3 2.3 5.4v.2c0 5.6-2.1 10.9-6.1 14.9-3.9 3.9-9.2 6.1-14.8 6.1s-10.8-2.2-14.8-6.1c-8.1-8.1-8.2-21.3-.1-29.5.1 0 .1-.1.2-.1l.1-.1.3-.3c.3-.3.6-.6 1-.9 1.3-.9 2.9-1.4 4.5-1.4 2.1 0 4.1.8 5.5 2.3 1.4 1.4 2.2 3.3 2.3 5.3V387.2c0 1.3.5 2.6 1.4 3.6.9.9 2.2 1.4 3.5 1.4.5 0 1-.1 1.5-.2l-5.5 6c-.1.1-.2.2-.2.4l-.3 1.8c0 .3 0 .5.2.7.1.1.2.1.2.2.1 0 .2.1.3.1h.1l1.8-.3c.1 0 .3-.1.4-.2l12.8-11.7c1.4.3 2.5 1 3.4 1.8zm-1.7-5.8-1.4-1.4 4.4-3.5.5.5-3.5 4.4zm7.8-6.5c-.7.7-1.9.7-2.5 0-.7-.7-.7-1.9 0-2.6.2-.2.8-.4 1.3-.6l2.3-.5c-.4 1.8-.9 3.4-1.1 3.7z" style="fill: rgb(61, 97, 172);"></path></svg>',
     courses: ['BA', 'MA'],
  },
  {
     stream: 'Science',
     colleges: 14,
     svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-255 347 100 100" xml:space="preserve"><path fill="#3B61AD" d="M-183.4 386.9c-.1-.2-.3-.3-.5-.3-.4-.1-.9.2-.9.6-.1.3-.3 1.1-.9 2l-.3.5-12-12 .5-.3c1.2-.7 2-.9 2.1-.9.4-.1.7-.5.6-.9-.1-.4-.5-.7-1-.6-.1 0-11.5 3.1-9.4 19.5l.1.5h-.5c-.9-.1-1.8-.1-2.6-.1-13.3 0-18.4 8.3-18.6 8.7-.2.3-.1.7.1 1 0 0 .1.1.2.1.3.2.9 0 1.1-.3.1-.2.6-1 1.6-2l.3-.3 13.2 13.2-.3.3c-1.1 1-1.9 1.5-2 1.6-.4.2-.5.7-.3 1.1 0 .1.1.1.1.2.1.1.4.2.6.2.1 0 .3 0 .4-.1.4-.2 9.7-6 8.6-21.2v-.5l.5.1c1.4.2 2.7.3 4 .3 13.2 0 15.6-9.6 15.6-9.6-.2-.4-.2-.6-.3-.8zm-22.7 21.3c-.6 1.8-1.5 3.5-2.5 5l-.8 1-13-13 .9-.7c1.5-1.1 3.2-1.9 5-2.6l.8-.3 9.9 9.9-.3.7zm.9-3.5-.1.8-8.4-8.4.8-.1c2.4-.4 5-.5 7.7-.3h.3v.3c.2 2.7.1 5.3-.3 7.7zm8.6-9.2c-2 .2-4.3.1-6.7-.2h-.3v-.3c-.3-2.4-.4-4.7-.2-6.7l.1-1.4 8.5 8.5-1.4.1zm8.9-3.8c-1.4 1.4-3.2 2.4-5.2 3l-.5.1-9.8-9.8.2-.5c.6-2.1 1.7-3.8 3-5.2l.6-.6 12.4 12.2-.7.8z" style="fill: rgb(59, 97, 173);"></path><path fill="#ff6c00" d="m-209.5 414 .3.3-.2.2-.9.9-13.3-13.2 1.1-1.1 13 12.9zm23.4-24.5-12.2-12.1-1.3 1.3 12.4 12.3 1.1-1.1.2-.2-.2-.2z" style="fill: rgb(34, 177, 188);"></path></svg>',
     courses: ['BSc', 'MSc'],
  },
 ];
function App() {

  return (
    <>
      <Header />
      <Banner />
      <RegistrationModal />
      <WelcomeComponent />
      <StreamSlider data={data} />
      <ExplorePrograms />
      <TopUniversities />
      <ContactUs />
      <NewsletterSubscribe />
      <Footer />
    </>
  )
}

export default App
