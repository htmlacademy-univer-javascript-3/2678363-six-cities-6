import { Offers } from '../types/offer';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const OFFERS: Offers = [
  {
    id: 1,
    picture: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/116705550.jpg?k=40b0a5d60341b25b0b6d4759eb95b50b32933f27eb36098420744ab965e367e0&o=',
    gallery: [
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/116705550.jpg?k=40b0a5d60341b25b0b6d4759eb95b50b32933f27eb36098420744ab965e367e0&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max500/711224652.jpg?k=72e37b378c4f23bfd67a87378730c83a593dffef696069b595990335072faa3c&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max500/711216737.jpg?k=2a655a8d15cb57ba4afa717f28987005dbde7705d206696a450453046ebfab79&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max300/711224065.jpg?k=271d0ec8c3a5453ce8469bc659a287bfbfa065b595044d16aa8c7e8e2fa543fe&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max300/340559348.jpg?k=ddd23c3a9ca88737b65b2a0126f20c9c6f95002723347acc51f2a0d7b28bc5f3&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max300/286774274.jpg?k=20c4ab364844c62cbdbd5d702032e22671169ae3b61d5391eb92bba5da634fd1&o=',
    ],
    isPremium: false,
    price: 350,
    title: 'Excellent service and maximum comfort in the heart of the city',
    type: 'Hotel',
    bedrooms: 4,
    adults: 8,
    isFavorite: false,
    rating: 4.8,
    goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating',
      'Coffee machine', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      name: 'Alex',
      avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true
    }
  },
  {
    id: 2,
    picture: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/551986439.jpg?k=e41a75e499bcaa20f6fc5e00870f33599f501055c1728ef8ff99c7b097a899e4&o=',
    gallery: [
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/551986439.jpg?k=e41a75e499bcaa20f6fc5e00870f33599f501055c1728ef8ff99c7b097a899e4&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max500/731127493.jpg?k=17276c52d8a767ce5495cde42b78cf5f98deec8feb9166ccc88c4a9f8215398f&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max300/551980292.jpg?k=703c28ac26b30d49ee86655e1a535be8ca37446c533f5b0ebc2f9a8515e980ea&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max300/551980225.jpg?k=99aef339b6e54f397c1dc438d9b76b54cf56c5f7e5992a920868f8780204de3a&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max300/551980288.jpg?k=f1882c8ce84e96ca02e966499e8b9b3f399b081ce3ca36437d5fefc08b269d3f&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max300/551980285.jpg?k=af9877b24c606eeb3bd310028dd5ca1e55abd7a158434b0582b742f4ed4b8192&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/551980283.jpg?k=3e41140ca9be965f2891e08c1611b99521f5f3e46c94d58a59e4008265f6612b&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/551981996.jpg?k=257f14221edf433e91dbac2c0c2cd730bbd7faf786cc43f80233cfdfdb5ee6be&o='
    ],
    isPremium: false,
    price: 190,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    bedrooms: 3,
    adults: 6,
    isFavorite: true,
    rating: 3.9,
    goods: ['Wi-Fi', 'Towels', 'Heating', 'Kitchen', 'Fridge'],
    host: {
      name: 'Helga',
      avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false
    }
  },
  {
    id: 3,
    picture: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/161626425.jpg?k=8b5521095918407ab812a608430517917c142aa602d2e3d94c802738c558ea0d&o=',
    gallery: [
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/161626425.jpg?k=8b5521095918407ab812a608430517917c142aa602d2e3d94c802738c558ea0d&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max500/586880159.jpg?k=9ba0ea01e69c59ed11319bc4bbcd8d0fd475a393d066b392dca079b7e1e89e31&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max500/586880154.jpg?k=567e341e2894dd9f12eae82560807a9e52003356cecd3ccdcf8d10154b5d206f&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max300/586880128.jpg?k=56e218258880ed31501b8d067b5f78b98241aa1128133725ba45cc9411971dd4&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max300/783089887.jpg?k=6eb74ac27f0e5d727d521c6182187172a99c9498f769d3d632579a55fd0cae27&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max300/586880130.jpg?k=5ab456d8897f0a7e57861f449265a7609b0fdfa5bf8f18add91767eb2090606a&o='
    ],
    isPremium: false,
    price: 420,
    title: 'Spacious house with all amenities for your stay',
    type: 'House',
    bedrooms: 4,
    adults: 6,
    isFavorite: true,
    rating: 4.4,
    goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating',
      'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      name: 'Viktor',
      avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true
    }
  },
  {
    id: 4,
    picture: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/379461891.jpg?k=4b402980c5b33cd8c3f3cf33e4ca2d1ebed8c8f0707f4aeae1f1cfccf7b2c047&o=',
    gallery: [
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/379461891.jpg?k=4b402980c5b33cd8c3f3cf33e4ca2d1ebed8c8f0707f4aeae1f1cfccf7b2c047&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max500/712033634.jpg?k=0d1630026f937b054bd7247e9f08ed5eb91148f8d1b5efeb3c365e3c2febb74b&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max500/395563181.jpg?k=e3f68151e5143193c2cd3306c03e7685addc01ce530b5ef266c7484ffdc60692&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max300/379465621.jpg?k=68b2871a6fe906589bf0bb13716e30f5e4b331fea712fc9e208d48142b7b657f&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max300/379465614.jpg?k=35ebd9f54163334547935ee129d90f43035af5d6b086276848af8abb78fc71ce&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max300/379465902.jpg?k=5bb06f9383add5609b509a4a4bf59df7458316dc8d7b2a129358c9bdaba0b118&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max300/395563162.jpg?k=0284b154974ec4387031b440c24ad1d3458fa1b9deb69b08916f1106978c06a1&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max300/379461660.jpg?k=521bd7cb0193f7d98bba33fe364e472835097d64256b912ad680c5adf103663b&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/379461947.jpg?k=9cb7735100781b485eb42bd0e59e6c761e857495523ef4aae672c20f1a526fa2&o='
    ],
    isPremium: false,
    price: 135,
    title: 'Cozy & comfortable room at great location',
    type: 'Room',
    bedrooms: 1,
    adults: 1,
    isFavorite: false,
    rating: 3.2,
    goods: ['Wi-Fi', 'Heating', 'Coffee machine', 'Cabel TV', 'Fridge', 'Dishwasher'],
    host: {
      name: 'Maxine',
      avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false
    }
  }
];
