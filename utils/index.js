const menus = [
    { name: 'Services', path: '#services' },
    { name: 'Facilities', path: '#facilities' },
    { name: 'About', path: '#about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '#footer' },
]

const facelities = [
    { name: 'X-Ray Facility', icon: '/xray.svg' },
    {
        name: 'Steriliztion protocol.',
        subpoint: ['Use of disposable gloves, mouth mask, disposable syringes, thumblers.', 'Autoclave sterilization of all instruments.'],
        icon: '/gloves.svg',
    },
    // {
    //     name: 'Autoclave sterilization of all instruments.',
    //     icon: '/instruments.svg',
    // },
    { name: 'Intra oral camera facility', icon: '/camera.svg' },
    { name: 'Comfortable, Friendly ambience', icon: '/ambience.svg' },
    { name: 'Prior appointment facility over phone to reduce waiting period', icon: '/call.svg' },
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



const galleryImages = [{ image: '/beautiful-young-woman.jpg', title: "Image title" }, { image: '/woman-looking-mirror.jpg', title: "Image title" }, { image: '/woman-looking-mirror.jpg', title: "Image title" }, { image: '/esthetic1.jpg', title: "Image title" }, { image: '/esthetic2.jpg', title: "Image title" }, { image: '/beautiful-young-woman.jpg', title: "Image title" },]

const implants = [
    'Implants are artificial tooth root replacements to replace missing teeth.',
    'Implant supported teeth look, feel & function like natural teeth.',
    'Allows you to eat what you want & function like natural teeth.',
    'Allows you to eat what you want & not what you have to.',
    'It prevents bone loss, avoids wrinkles on the face due to loss of teeth, maintains youthfulness of the face.',
    'They avoid drilling down of adjacent healthy teeth as in other teeth replacement procedures.'
]

const ethestic = [
    'The benefit of having a nice smile is obvious.',
    'It enhances your confidence and self esteem.',
    'Once invested in your smile, you can wear it for the rest of your life.',
    'All ceramic crowns the most natural looking ceramic crowns.',
    'We get all ceramic crowns done by international brands.'
]

const rootCanel = [
    'Are you suffering from infected painful teeth?',
    'Do you need RCT?',
    'Forget multiple visits to the clinic',
    'Save your tooth & time.',
    'We complete RCT in single or two visits.'
]

const orthodontics = [
    'Between 6-12 years of age for the children: Measures can be taken to diagnose the onset of any orthodontics problem, its treatment & growth modification. Early treatment would simplify the complications which would occure in future.',
    'Habit breaking appliances are given in this period.',
    '14 year onwards-teeth crowding, protrusion, spacing can be treated with fixed braces.',
    'Ceramic braces are tooth coloured braces & are barely visible.',
    'Adult orthodontics even delayed braces can yield great results. Invisible braces are particularly useful in such situations. They allow the individual.'
]

const gumTreatments = [
    'Teeth cleaning and polishing is the first step in strengthening your gums & teeth.',
    'It reduces bleeding, bad smell & swelling around the gums.',
    'Gum surgeries & bone grafting can save falling teeth. They give the luxury of preserving your teeth thus ensuring good health.'
]



export { menus, facelities, treatments, galleryImages, implants, ethestic, rootCanel, orthodontics, gumTreatments }