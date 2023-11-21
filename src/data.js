const reviews = [
  {
    id: 1,
    name: "Agra",
    price : 32000,
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Agra, located in northern India, is celebrated for its rich history and cultural treasures. The Taj Mahal, an iconic symbol, stands as a testament to love and is one of the Seven Wonders of the World. Built by Emperor Shah Jahan, this white marble masterpiece attracts millions of visitors yearly with its intricate carvings and meticulously landscaped gardens,The city is not just about the Taj Mahal; Agra Fort, a UNESCO World Heritage Site, showcases stunning Mughal architecture along the Yamuna River. Fatehpur Sikri, an abandoned city founded by Emperor Akbar, offers a glimpse into Mughal grandeur,Agra's bustling streets and vibrant markets provide a lively atmosphere. Visitors can indulge in local delicacies like Agra Petha and explore markets filled with traditional crafts and exquisite marble products.",
  },
  {
    id: 2,
    name: "Amritsar",
    price : 47030,
    image:
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Amritsar, in Punjab, India, is a city steeped in spirituality and history. The Golden Temple, or Harmandir Sahib, is its centerpiece, drawing pilgrims worldwide. Jallianwala Bagh, a historic site, recalls India's struggle for independence.At the Wagah Border, witness the daily ceremonial closing—a synchronized display of unity and rivalry between India and Pakistan.Amritsar's markets offer a glimpse into Punjab's culture, featuring traditional attire, handicrafts, and local delights like Amritsari kulcha and lassi."
  },
  {
    id: 3,
    name: "Jaipur",
    price : 76345,
    image:
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Jaipur, the vibrant capital of the Indian state of Rajasthan, is a city that encapsulates the essence of royalty, color, and architectural splendor. Known as the Pink City due to the distinctive color of its buildings, Jaipur is a captivating destination that seamlessly blends history with modernity.At the heart of Jaipur stands the Hawa Mahal, a unique five-story palace adorned with intricately latticed windows. This architectural marvel allowed royal women to observe street festivities while remaining unseen. The City Palace, a blend of Rajput, Mughal, and European styles, is a sprawling complex showcasing courtyards, museums, and the Chandra Mahal, the residence of the royal family.One of the most iconic landmarks is the Amer Fort, perched atop a hill overlooking Maota Lake. The fort's grandeur is enhanced by its artistic blend of Hindu and Mughal architecture. Visitors can ascend to the fort on elephant back, adding to the regal experience.Jaipur is a shopper's paradise with bustling markets and vibrant bazaars. Johari Bazaar is famous for its exquisite jewelry, while the colorful stalls of Bapu Bazaar offer a kaleidoscope of textiles, handicrafts, and traditional Rajasthani attire.The Jantar Mantar, an astronomical observatory built by Maharaja Sawai Jai Singh II, showcases a collection of architectural astronomical instruments. This UNESCO World Heritage Site reflects the city's scientific prowess during the 18th century.Jaipur's cultural vibrancy is evident in its lively festivals, including the Elephant Festival and the Teej Festival. The lively processions, traditional dances, and vibrant attire create an immersive experience for locals and visitors alike.Culinary enthusiasts are treated to Rajasthani delights, with dishes like Dal Baati Churma and Ghewar showcasing the region's rich culinary heritage.In summary, Jaipur is a living tapestry of regality, culture, and vibrant traditions. Its palaces, forts, and markets offer a glimpse into the royal past, while its lively streets and festivals reflect the spirit of modern Rajasthan.",
  },
  {
    id: 4,
    name: "Mysore",
    price : 87654,
    image:
      "https://plus.unsplash.com/premium_photo-1697729603226-8c8627dfc12b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Mysore, a city nestled in the southern state of Karnataka, India, is a captivating blend of rich heritage, royal grandeur, and natural beauty. Known as the Cultural Capital of Karnataka, Mysore is celebrated for its opulent palaces, intricately designed temples, and lush landscapes.The Mysore Palace, a masterpiece of Indo-Saracenic architecture, is the city's crowning jewel. Illuminated by thousands of bulbs during the annual Dasara festival, the palace becomes a dazzling spectacle, attracting visitors from far and wide. The Chamundi Hills, crowned by the Chamundeshwari Temple, offer breathtaking panoramic views of the city and its surroundings.Mysore's cultural tapestry is woven with silk, sandalwood, and incense. The Devaraja Market is a sensory delight, with stalls selling vibrant silk sarees, fragrant sandalwood products, and an array of spices. The city's Mysore Pak, a delectable sweet made from ghee and gram flour, is a must-try for culinary enthusiasts.Nature enthusiasts find solace in the serene Brindavan Gardens, famous for its musical fountain that comes alive with vibrant lights and rhythmic water dances in the evening. The Mysore Zoo, one of the oldest in the country, is a haven for wildlife enthusiasts, showcasing a diverse range of fauna.Mysore's cultural richness extends to its traditional arts, with the Mysore style of painting and the vibrant Mysore Dasara being notable cultural contributions. The city's peaceful ambiance and well-planned gardens, such as the historic Lalitha Mahal Palace gardens, offer a tranquil escape.In essence, Mysore's allure lies in its harmonious blend of history, culture, and natural beauty. Visitors to this enchanting city are treated to a royal experience that reflects the grandeur of its past while embracing the vibrant spirit of Karnataka's present."
  },
  {
    id: 5,
    name: "Goa",
    price:76321,
    image: "https://plus.unsplash.com/premium_photo-1697729600112-434ee1c7f670?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Goa, a coastal paradise in western India, is renowned for its sun-kissed beaches, vibrant culture, and Portuguese-influenced architecture. A favorite destination for both domestic and international travelers, Goa offers a unique blend of relaxation and excitement.The golden beaches of Goa, such as Baga, Calangute, and Anjuna, attract sunseekers and water sports enthusiasts alike. The laid-back atmosphere, shacks serving delicious seafood, and the sound of the Arabian Sea create an idyllic coastal experience.The beach clubs, shacks, and bars come alive with music, dance, and a lively atmosphere.",
  },
];

export default reviews;
