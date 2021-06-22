const menus = [
  { name: 'Services', path: '/#services' },
  { name: 'Facilities', path: '/#facilities' },
  { name: 'About', path: '/#about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/#footer' },
  { name: 'Team', path: '/team' },
]

const facelities = [
  { name: 'OPD', icon: '/dentist-tools.svg' },
  { name: 'X-Ray Facility', icon: '/xray.svg' },
  {
    name: 'Steriliztion protocol.',
    subpoint: [
      'Use of disposable gloves, mouth mask, disposable syringes, thumblers.',
      'Autoclave sterilization of all instruments.',
    ],
    icon: '/gloves.svg',
  },
  // {
  //     name: 'Autoclave sterilization of all instruments.',
  //     icon: '/instruments.svg',
  // },
  { name: 'Intra oral camera facility', icon: '/camera.svg' },
  { name: 'Comfortable, Friendly ambience', icon: '/ambience.svg' },
  {
    name: 'Prior appointment facility over phone to reduce waiting period',
    icon: '/call.svg',
  },
]

const treatments = [
  {
    name:
      'Detailed Examination, discussion of various treatment modalities with diagnostic models, photographs',
    icon: '/examine.svg',
  },
  {
    name: 'Tooth Fillings- silver, tooth colored',
    icon: '/tooth-filling.svg',
  },
  {
    name: 'Teeth removal, impacted teeth removal',
    icon: '/removal-tongs.svg',
  },
  {
    name: 'Complete denture, removable partial dentures, implants',
    icon: '/teeth.svg',
  },
  {
    name: 'Surgical procedures like frenectomy,vestibuloplasty',
    icon: '/dental-drill.svg',
  },
  {
    name: 'Dental treatments for children and all.',
    icon: '/teeth1.svg',
  },
]

const implantsImages = [
  { image: '/woman-looking-mirror.jpg', title: 'Image title' },
  { image: '/woman-looking-mirror.jpg', title: 'Image title' },
  { image: '/beautiful-young-woman.jpg', title: 'Image title' },
  { image: '/esthetic2.jpg', title: 'Image title' },
  { image: '/esthetic1.jpg', title: 'Image title' },
  { image: '/woman-looking-mirror.jpg', title: 'Image title' },
]

const estheticImages = [
  { image: '/esthetic2.jpg', title: 'Image title' },
  { image: '/woman-looking-mirror.jpg', title: 'Image title' },
  { image: '/beautiful-young-woman.jpg', title: 'Image title' },
  { image: '/esthetic1.jpg', title: 'Image title' },
  { image: '/beautiful-young-woman.jpg', title: 'Image title' },
  { image: '/woman-looking-mirror.jpg', title: 'Image title' },
]

const rootCanelImages = [
  { image: '/esthetic1.jpg', title: 'Image title' },
  { image: '/woman-looking-mirror.jpg', title: 'Image title' },
  { image: '/beautiful-young-woman.jpg', title: 'Image title' },
  { image: '/esthetic2.jpg', title: 'Image title' },
  { image: '/beautiful-young-woman.jpg', title: 'Image title' },
  { image: '/woman-looking-mirror.jpg', title: 'Image title' },
]

const orthodonticsImages = [
  { image: '/woman-looking-mirror.jpg', title: 'Image title' },
  { image: '/woman-looking-mirror.jpg', title: 'Image title' },
  { image: '/beautiful-young-woman.jpg', title: 'Image title' },
  { image: '/esthetic1.jpg', title: 'Image title' },
  { image: '/esthetic2.jpg', title: 'Image title' },
  { image: '/woman-looking-mirror.jpg', title: 'Image title' },
]

const gumTreatmentsImages = [
  { image: '/esthetic1.jpg', title: 'Image title' },
  { image: '/woman-looking-mirror.jpg', title: 'Image title' },
  { image: '/beautiful-young-woman.jpg', title: 'Image title' },
  { image: '/esthetic1.jpg', title: 'Image title' },
  { image: '/esthetic2.jpg', title: 'Image title' },
  { image: '/woman-looking-mirror.jpg', title: 'Image title' },
]

const implants = [
  'Implants are artificial tooth root replacements to replace missing teeth.',
  'Implant supported teeth look, feel & function like natural teeth.',
  'Allows you to eat what you want & function like natural teeth.',
  'Allows you to eat what you want & not what you have to.',
  'It prevents bone loss, avoids wrinkles on the face due to loss of teeth, maintains youthfulness of the face.',
  'They avoid drilling down of adjacent healthy teeth as in other teeth replacement procedures.',
]

const ethestic = [
  'The benefit of having a nice smile is obvious.',
  'It enhances your confidence and self esteem.',
  'Once invested in your smile, you can wear it for the rest of your life.',
  'All ceramic crowns the most natural looking ceramic crowns.',
  'We get all ceramic crowns done by international brands.',
]

const rootCanel = [
  'Are you suffering from infected painful teeth?',
  'Do you need RCT?',
  'Forget multiple visits to the clinic',
  'Save your tooth & time.',
  'We complete RCT in single or two visits.',
]

const orthodontics = [
  'Between 6-12 years of age for the children: Measures can be taken to diagnose the onset of any orthodontics problem, its treatment & growth modification. Early treatment would simplify the complications which would occure in future.',
  'Habit breaking appliances are given in this period.',
  '14 year onwards-teeth crowding, protrusion, spacing can be treated with fixed braces.',
  'Ceramic braces are tooth coloured braces & are barely visible.',
  'Adult orthodontics even delayed braces can yield great results. Invisible braces are particularly useful in such situations. They allow the individual.',
]

const gumTreatments = [
  'Teeth cleaning and polishing is the first step in strengthening your gums & teeth.',
  'It reduces bleeding, bad smell & swelling around the gums.',
  'Gum surgeries & bone grafting can save falling teeth. They give the luxury of preserving your teeth thus ensuring good health.',
]

const galleryCategories = [
  'Clinic',
  'FMR Implant Prosthetic',
  'FMR with Precision Attachment',
  'Full mouth implant prosthesis',
  'Immediate Implant',
  'Mandibular Implant Retained Overdenture',
  'Single implant (Anterior)',
  'Tooth Supported FMR',
  'Diestema closure',
  'Zirconia bridge',
  'Root Canal Treatment',
]

const getSrcForCategory = (category) => {
  switch (category) {
    case galleryCategories[0]:
      return require.context('~/assets/images/clinic', true)
      break

    case galleryCategories[1]:
      return require.context('~/assets/images/implants/fmr-implant-pro', true)
      break
    case galleryCategories[2]:
      return require.context(
        '~/assets/images/implants/FMR with Precision Attachment',
        true
      )
      break
    case galleryCategories[3]:
      return require.context(
        '~/assets/images/implants/Full mouth implant prosthesis',
        true
      )
      break
    case galleryCategories[4]:
      return require.context('~/assets/images/implants/Immediate Implant', true)
      break

    case galleryCategories[5]:
      return require.context(
        '~/assets/images/implants/Mandibular Implant Retained Overdenture',
        true
      )
      break

    case galleryCategories[6]:
      return require.context(
        '~/assets/images/implants/Single implant (Anterior)',
        true
      )
      break

    case galleryCategories[7]:
      return require.context(
        '~/assets/images/implants/Tooth Supported FMR',
        true
      )
      break

    case galleryCategories[8]:
      return require.context(
        '~/assets/images/Esthetic Treatments/Diestema closure',
        true
      )
      break

    case galleryCategories[9]:
      return require.context(
        '~/assets/images/Esthetic Treatments/Zirconia bridge',
        true
      )
      break

    case galleryCategories[10]:
      return require.context('~/assets/images/Root Canal Treatment', true)
      break

    default:
      return require.context('~/assets/images/clinic', true)
      break
  }
}

const team = [
  {
    name: 'Dr. Digvijay Patil',
    education: 'BDS, MDS ( Prosthodontics) Fellow in Implantology (ISOI)',
    src: '/t1.jpeg',
  },

  {
    name: 'Dr. Deepali D Patil',
    education: 'BDS (RGUHS)',
    src: '/t1-1.jpg',
  },

  {
    name: 'Dr. Vishal Panjwani',
    education: 'BDS, MDS(Periodontics)',
    src: '/t3-1.jpg',
  },
  {
    name: 'Dr. Indraneel Chavan',
    education: 'BDS, MDS (Orthodontics)',
    src: '/t2.jpeg',
  },
  {
    name: 'Dr. Nilam Pawar',
    education: 'BDS, MDS(Endodontics)',
    src:
      'https://delmarbehavioralhealth.com/wp-content/uploads/2017/09/Female-Avatar.png',
  },
]

export {
  getSrcForCategory,
  galleryCategories,
  menus,
  facelities,
  treatments,
  implants,
  ethestic,
  rootCanel,
  orthodontics,
  gumTreatments,
  implantsImages,
  gumTreatmentsImages,
  orthodonticsImages,
  estheticImages,
  rootCanelImages,
  team,
}
