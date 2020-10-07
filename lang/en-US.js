export default () => {
  return new Promise(function(resolve) {
    resolve({
      common: {
        title: 'A simple example',
        subtitle: "It's a blank-page. Start to build your'e page from here.",
        error_with_status: 'Something went wrong',
        '404': 'This page was not found',
        '404_subtitle': 'You can relax here or go back to the homepage.',
        back: 'Back to home',
        error_without_status: 'An error occurred on the server',
        contact_title: 'Free Project Quote',
        contact_title2: 'Please contact us',
        contact_subtitle:
          'Do you have a question, would you like more information about one of our services or would you like a price indication? Use the contact form below and we will contact you as soon as possible.',
        form_name: 'What is your name? *',
        form_email: 'What is your email? *',
        form_phone: 'What is your phonenumber?',
        form_company: 'Name of your company',
        form_message: 'Type your message here ...',
        form_terms: 'I have read and accept the conditions',
        form_privacy: 'Service & Privacy Policy *',
        form_send: 'Send message',
        login: 'Log in',
        login_create: 'Create a new account',
        login_or: 'Or login with email',
        login_email: 'Email',
        login_password: 'Password',
        login_remember: 'Remember',
        login_forgot: 'Forgot password',
        continue: 'Continue',
        login_title: 'Welcome back.',
        login_subtitle: 'Please log in to continue',
        register: 'Register',
        register_already: 'Already have an account?',
        register_or: 'Or register with email',
        register_name: 'What is your name? *',
        register_email: 'What is your email? *',
        register_password: 'Password',
        register_confirm: 'Confirm password',
        register_title: 'Nice to meet you :)',
        register_subtitle: '',
        accept: 'Accept',
        en: 'English',
        nl: 'Dutch'
      },
      IGUS: {
        header_login: 'login',
        header_register: 'register',
        header_language: 'language',
        header_promotions: 'Our services',
        header_feature: 'Methods',
        header_benefit: 'Why BetaCore?',
        header_contact: 'Contact',
        banner_subtitle: 'A tailor-made website and / or app in no time.',
        banner_getstarted: 'More info',
        banner_viewmarket: 'Contact',
        to_top: 'To top'
      }
    })
  })
}
