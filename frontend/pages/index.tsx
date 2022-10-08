import type { NextPage } from 'next'
import Head from 'next/head'

import { BookCard } from '@components'

const books = [
  {
    _id: '633457f71ca56493a94678a2',
    isbn13: '9780002005883',
    isbn10: '0002005883',
    title: 'Gilead',
    subtitle: '',
    authors: 'Marilynne Robinson',
    categories: 'Fiction',
    thumbnail:
      'http://books.google.com/books/content?id=KQZCPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description:
      'A NOVEL THAT READERS and critics have been eagerly anticipating for over a decade, Gilead is an astonishingly imagined story of remarkable lives. John Ames is a preacher, the son of a preacher and the grandson (both maternal and paternal) of preachers. It’s 1956 in Gilead, Iowa, towards the end of the Reverend Ames’s life, and he is absorbed in recording his family’s story, a legacy for the young son he will never see grow up. Haunted by his grandfather’s presence, John tells of the rift between his grandfather and his father: the elder, an angry visionary who fought for the abolitionist cause, and his son, an ardent pacifist. He is troubled, too, by his prodigal namesake, Jack (John Ames) Boughton, his best friend’s lost son who returns to Gilead searching for forgiveness and redemption. Told in John Ames’s joyous, rambling voice that finds beauty, humour and truth in the smallest of life’s details, Gilead is a song of celebration and acceptance of the best and the worst the world has to offer. At its heart is a tale of the sacred bonds between fathers and sons, pitch-perfect in style and story, set to dazzle critics and readers alike.',
    published_year: '2004',
    average_rating: 3.85,
    num_pages: 247,
    ratings_count: 361,
  },
  {
    _id: '633457f71ca56493a94678a3',
    isbn13: '9780002261982',
    isbn10: '0002261987',
    title: "Spider's Web",
    subtitle: 'A Novel',
    authors: 'Charles Osborne;Agatha Christie',
    categories: 'Detective and mystery stories',
    thumbnail:
      'http://books.google.com/books/content?id=gA5GPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description:
      "A new 'Christie for Christmas' -- a full-length novel adapted from her acclaimed play by Charles Osborne Following BLACK COFFEE and THE UNEXPECTED GUEST comes the final Agatha Christie play novelisation, bringing her superb storytelling to a new legion of fans. Clarissa, the wife of a Foreign Office diplomat, is given to daydreaming. 'Supposing I were to come down one morning and find a dead body in the library, what should I do?' she muses. Clarissa has her chance to find out when she discovers a body in the drawing-room of her house in Kent. Desperate to dispose of the body before her husband comes home with an important foreign politician, Clarissa persuades her three house guests to become accessories and accomplices. It seems that the murdered man was not unknown to certain members of the house party (but which ones?), and the search begins for the murderer and the motive, while at the same time trying to persuade a police inspector that there has been no murder at all... SPIDER'S WEB was written in 1954 specifically for Margaret Lockwood and opened first at the Theatre Royal Nottingham before moving to the Savoy Theatre in London on 14 December 1954. With THE MOUSETRAP and WI",
    published_year: '2000',
    average_rating: 3.83,
    num_pages: 241,
    ratings_count: 5164,
  },
  {
    _id: '633457f71ca56493a94678a7',
    isbn13: '9780006280934',
    isbn10: '0006280935',
    title: 'The Problem of Pain',
    subtitle: '',
    authors: 'Clive Staples Lewis',
    categories: 'Christian life',
    thumbnail:
      'http://books.google.com/books/content?id=Kk-uVe5QK-gC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description:
      '"In The Problem of Pain, C.S. Lewis, one of the most renowned Christian authors and thinkers, examines a universally applicable question within the human condition: If God is good and all-powerful, why does he allow his creatures to suffer pain? With his signature wealth of compassion and insight, C.S. Lewis offers answers to these crucial questions and shares his hope and wisdom to help heal a world hungering for a true understanding of human nature."--Amazon.',
    published_year: '2002',
    average_rating: 4.09,
    num_pages: 176,
    ratings_count: 37569,
  },
  {
    _id: '633457f71ca56493a94678a8',
    isbn13: '9780006353287',
    isbn10: '0006353282',
    title: 'An Autobiography',
    subtitle: '',
    authors: 'Agatha Christie',
    categories: 'Authors, English',
    thumbnail:
      'http://books.google.com/books/content?id=c49GQwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description: 'Donation.',
    published_year: '1977',
    average_rating: 4.27,
    num_pages: 560,
    ratings_count: 3975,
  },
  {
    _id: '633457f71ca56493a94678a9',
    isbn13: '9780006380832',
    isbn10: '0006380832',
    title: 'Empires of the Monsoon',
    subtitle: 'A History of the Indian Ocean and Its Invaders',
    authors: 'Richard Hall',
    categories: 'Africa, East',
    thumbnail:
      'http://books.google.com/books/content?id=MuPEQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description:
      "Until Vasco da Gama discovered the sea-route to the East in 1497-9 almost nothing was known in the West of the exotic cultures and wealth of the Indian Ocean and its peoples. It is this civilization and its destruction at the hands of the West that Richard Hall recreates in this book. Hall's history of the exploration and exploitation by Chinese and Arab travellers, and by the Portuguese, Dutch and British alike is one of brutality, betrayal and colonial ambition.",
    published_year: '1998',
    average_rating: 4.41,
    num_pages: 608,
    ratings_count: 65,
  },
  {
    _id: '633457f71ca56493a94678ac',
    isbn13: '9780006479673',
    isbn10: '0006479677',
    title: 'If Tomorrow Comes',
    subtitle: '',
    authors: 'Sidney Sheldon',
    categories: 'Adventure stories',
    thumbnail:
      'http://books.google.com/books/content?id=l2tBi_jLuk8C&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description:
      "One of Sidney Sheldon's most popular and bestselling titles, repackaged and reissued for a new generation of fans.",
    published_year: '1994',
    average_rating: 4.04,
    num_pages: 501,
    ratings_count: 49170,
  },
  {
    _id: '633457f71ca56493a94678ad',
    isbn13: '9780006480099',
    isbn10: '0006480098',
    title: "Assassin's Apprentice",
    subtitle: '',
    authors: 'Robin Hobb',
    categories: 'American fiction',
    thumbnail:
      'http://books.google.com/books/content?id=qTaGQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description: 'Fantasy-roman.',
    published_year: '1996',
    average_rating: 4.15,
    num_pages: 460,
    ratings_count: 133972,
  },
  {
    _id: '633457f71ca56493a94678af',
    isbn13: '9780006483014',
    isbn10: '0006483011',
    title: 'The Once and Future King',
    subtitle: '',
    authors: 'Terence Hanbury White',
    categories: 'Arthurian romances',
    thumbnail:
      'http://books.google.com/books/content?id=Jx6BvgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description:
      'An omnibus volume of the author\'s complete story of the Arthurian epic which includes: "The sword in the stone" (1939), "The witch in the wood" (1939), "The ill-made knight" (1940), "The candle in the wind" (published for the first time), and "The book of Merlyn." 1996.',
    published_year: '1996',
    average_rating: 4.04,
    num_pages: 823,
    ratings_count: 2805,
  },
  {
    _id: '633457f71ca56493a94678b1',
    isbn13: '9780006483908',
    isbn10: '0006483909',
    title: 'Jimmy the Hand',
    subtitle: '',
    authors: 'Raymond E. Feist;S. M. Stirling',
    categories: 'Fantasy fiction',
    thumbnail:
      'http://books.google.com/books/content?id=hV4-oITYFN8C&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description:
      "Jimmy the Hand, boy thief of Krondor, lived in the shadows of the city. Though gifted beyond his peers, Jimmy is merely a pickpocket with potential--until he aids Prince Arutha in the rescue of Princess Anita from Duke Guy du Bas-Tyra, and runs afoul of \"Black Guy's\" secret police. Facing a choice between disappearing on his own or in a weighted barrel at the bottom of Krondor's harbor, Jimmy chooses the former. Forced to flee the only home he's ever known, Jimmy finds himself among the unsuspecting rural villagers of Land's End, where he hopes to prosper with his talents for con and thievery. But Land's End is home to many who tread the crooked path--and to a dark, dangerous presence even the local smugglers don't recognize. And suddenly Jimmy's youthful bravado and courage are leading him into the maw of chaos . . . and, quite possibly, to his doom.",
    published_year: '2003',
    average_rating: 3.95,
    num_pages: 368,
    ratings_count: 5579,
  },
  {
    _id: '633457f71ca56493a94678b4',
    isbn13: '9780006496434',
    isbn10: '0006496431',
    title: 'The Little House',
    subtitle: '',
    authors: 'Philippa Gregory',
    categories: 'Country life',
    thumbnail:
      'http://books.google.com/books/content?id=rbvUPps9vKsC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description:
      "It was easy for Elizabeth. She married the man she loved. It was harder for Ruth. She married Elizabeth's son and then found that, somehow, she could never quite measure up. This thriller examines what women want and what they fear, as Ruth confronts the shifting borders of her own sanity.",
    published_year: '1998',
    average_rating: 3.66,
    num_pages: 368,
    ratings_count: 1832,
  },
  {
    _id: '633457f71ca56493a94678b6',
    isbn13: '9780006496892',
    isbn10: '000649689X',
    title: 'Glittering Images',
    subtitle: '',
    authors: 'Susan Howatch',
    categories: 'English fiction',
    thumbnail:
      'http://books.google.com/books/content?id=rDHbn0ORKhQC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description:
      'It is 1937, and Charles Ashworth, a Canon to the Archbishop of Canterbury, is sent to untangle a web of self-delusion and corruption at the episcopal palace of the charismatic Bishop of Starbridge.',
    published_year: '1996',
    average_rating: 4.07,
    num_pages: 512,
    ratings_count: 2045,
  },
  {
    _id: '633457f71ca56493a94678ba',
    isbn13: '9780006499268',
    isbn10: '0006499260',
    title: 'The Reverse of the Medal',
    subtitle: '',
    authors: "Patrick O'Brian",
    categories: 'Adventure stories',
    thumbnail:
      'http://books.google.com/books/content?id=YtjxFRb39Z4C&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description:
      'In this book, Jack Aubrey returns from his duties protecting whalers off the South American coast and is persuaded by a casual acquaintance to make investments in the City on the strength of supposedly certain information. From there he is led into the half-worlds of the London criminal underground and of government espionage - the province of his friend, Stephen Maturin.',
    published_year: '1997',
    average_rating: 4.41,
    num_pages: 261,
    ratings_count: 177,
  },
  {
    _id: '633457f71ca56493a94678bd',
    isbn13: '9780006512677',
    isbn10: '0006512674',
    title: 'Spares',
    subtitle: '',
    authors: 'Michael Marshall Smith',
    categories: 'Human cloning',
    thumbnail:
      'http://books.google.com/books/content?id=83RrAdP9y5UC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description:
      'Spares - human clones, the ultimate health insurance. An eye for an eye - but some people are doing all the taking. The story of Jack Randall: burnt-out, dropped out, and way overdrawn at the luck bank. But as caretaker on a Spares Farm, he still has a choice, and it might make a difference.',
    published_year: '1998',
    average_rating: 4.13,
    num_pages: 317,
    ratings_count: 2481,
  },
  {
    _id: '633457f71ca56493a94678c6',
    isbn13: '9780006754893',
    isbn10: '0006754899',
    title: 'A Small Pinch of Weather',
    subtitle: 'And Other Stories',
    authors: 'Joan Aiken',
    categories: "Children's stories, English",
    thumbnail:
      'http://books.google.com/books/content?id=QiFhOBpYZoYC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description:
      "A magical and fantastic collection of early stories by one of the most original children's authors of the 20th century. For 8-11 year olds.",
    published_year: '2000',
    average_rating: 4.27,
    num_pages: 239,
    ratings_count: 116,
  },
  {
    _id: '633457f71ca56493a94678cc',
    isbn13: '9780007116263',
    isbn10: '0007116268',
    title: 'The Lord of the Rings, the Return of the King',
    subtitle: 'Visual Companion',
    authors: 'Jude Fisher',
    categories: 'Imaginary wars and battles',
    thumbnail:
      'http://books.google.com/books/content?id=kNBnQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description:
      'A visual guide to the third in the Lord of the Rings movie trilogy. A large-format, full-colour guide to the characters, places, landscapes, artefacts, battles, and costumes as seen in the film, it features images, informative text and specially commissioned extras.',
    published_year: '2003',
    average_rating: 4.59,
    num_pages: 72,
    ratings_count: 22,
  },
  {
    _id: '633457f71ca56493a94678d8',
    isbn13: '9780007121014',
    isbn10: '0007121016',
    title: 'Taken at the Flood',
    subtitle: '',
    authors: 'Agatha Christie',
    categories: 'Fiction',
    thumbnail:
      'http://books.google.com/books/content?id=3gWlxIFlMEwC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description:
      'A Few Weeks After Marrying An Attractive Young Widow, Gordon Cloade Is Tragically Killed By A Bomb Blast In The London Blitz. Overnight, The Former Mrs Underhay Finds Herself In Sole Possession Of The Cloade Family Fortune. Shortly Afterwards, Hercule Poirot Receives A Visit From The Dead Man S Sister-In-Law Who Claims She Has Been Warned By Spirits That Mrs Underhay S First Husband Is Still Alive. Poirot Has His Suspicions When He Is Asked To Find A Missing Person Guided Only By The Spirit World. Yet What Mystifies Poirot Most Is The Woman S True Motive For Approaching Him&',
    published_year: '2002',
    average_rating: 3.71,
    num_pages: 352,
    ratings_count: 8852,
  },
  {
    _id: '633457f71ca56493a94678db',
    isbn13: '9780007122585',
    isbn10: '0007122586',
    title: 'The Secret of Chimneys',
    subtitle: '',
    authors: 'Agatha Christie',
    categories: 'Battle, Superintendent (Fictitious character)',
    thumbnail:
      'http://books.google.com/books/content?id=1OluX5g96OcC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description:
      'A young drifter finds more than he bargained for when he agrees to deliver a parcel to an English country house...',
    published_year: '2001',
    average_rating: 3.86,
    num_pages: 400,
    ratings_count: 11110,
  },
  {
    _id: '633457f71ca56493a94678dd',
    isbn13: '9780007126903',
    isbn10: '0007126905',
    title: 'The Metaphysical Club',
    subtitle: '',
    authors: 'Louis Menand',
    categories: 'Cambridge (Mass.)',
    thumbnail:
      'http://books.google.com/books/content?id=C3Gkwi3SfmMC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description:
      'In an absorbing narrative about personalities and social history, Menand discusses the Metaphysical Club, an informal group that met in Cambridge, Massachusetts, in 1872, to talk about ideas. Members included Oliver Wendell Holmes, Jr., William James, and Charles Sanders Peirce. 21 photos.',
    published_year: '2002',
    average_rating: 4.07,
    num_pages: 560,
    ratings_count: 3311,
  },
  {
    _id: '633457f71ca56493a94678de',
    isbn13: '9780007127740',
    isbn10: '000712774X',
    title: 'The illustrated man',
    subtitle: '',
    authors: 'Ray Bradbury',
    categories: 'Fiction',
    thumbnail:
      'http://books.google.com/books/content?id=kePqlVft1bQC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description: '',
    published_year: '2002',
    average_rating: 4.14,
    num_pages: 186,
    ratings_count: 56781,
  },
  {
    _id: '633457f71ca56493a94678df',
    isbn13: '9780007129652',
    isbn10: '0007129653',
    title: "Wilkins' Tooth",
    subtitle: '',
    authors: 'Diana Wynne Jones',
    categories: 'Business enterprises',
    thumbnail:
      'http://books.google.com/books/content?id=lXUSHqQfOD8C&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description:
      "OWN BACK LIMITEDREVENGE ARRANGED, PRICE ACCORDING TO TASK, ALL DIFFICULT TASKS UNDERTAKEN, TREASURE HUNTED, ETC. It seemed like a marvellous scheme at the time! Frank and Jess had set up the business because they needed money - their pocket-money had been stopped just when Frank owed Buster Knell ten pence. Their father had put a quick stop to ERRANDS RUN, so why not try something that was bad instead? Offering to do dreadful things that other people didn't dare to do? So they pinned up the notice on the potting-shed and waited for customers. But of course, nothing's ever THAT straightforward.",
    published_year: '2002',
    average_rating: 3.59,
    num_pages: 207,
    ratings_count: 69,
  },
  {
    _id: '633457f71ca56493a94678e0',
    isbn13: '9780007130313',
    isbn10: '0007130317',
    title: 'Cut',
    subtitle: '',
    authors: 'Patricia McCormick',
    categories: 'Emotional problems',
    thumbnail:
      'http://books.google.com/books/content?id=Q140Mlie138C&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description:
      "Fifteen-year old Callie is so withdrawn that she's not speaking to anyone - including her therapist at Sea Pines, known to its guests as 'Sick Minds' - the residential treatment facility where her parents and doctor send her after discovering that she cuts herself. Her story unfolds primarily through dramatic monologues, gradually revealing the family turmoil that led to her self-destructive behaviour.",
    published_year: '2002',
    average_rating: 3.76,
    num_pages: 173,
    ratings_count: 107,
  },
  {
    _id: '633457f71ca56493a94678e3',
    isbn13: '9780007136599',
    isbn10: '0007136595',
    title: 'The Fellowship of the Ring',
    subtitle: '',
    authors: 'John Ronald Reuel Tolkien;Alan Lee',
    categories: 'Baggins, Frodo (Fictitious character)',
    thumbnail:
      'http://books.google.com/books/content?id=K7xSPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description:
      "Tolkien's classic fantasy about the quest to save Middle-Earth--and the basis for Peter Jackson's Academy Award(-winning film trilogy--is now available in these Young Reader's Editions. Each book of the trilogy is available individually, or together in a three-volume paperback boxed set.",
    published_year: '2002',
    average_rating: 4.35,
    num_pages: 410,
    ratings_count: 56,
  },
  {
    _id: '633457f71ca56493a94678e4',
    isbn13: '9780007137336',
    isbn10: '0007137338',
    title: 'Lirael',
    subtitle: 'Daughter of the Clayr',
    authors: 'Garth Nix',
    categories: 'Fantasy fiction',
    thumbnail:
      'http://books.google.com/books/content?id=sDzU8TpKvQAC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description:
      'When a dangerous necromancer threatens to unleash a long-buried evil, Lirael and Prince Sameth are drawn into a battle to save the Old Kingdom and reveal their true destinies. Suggested level: secondary.',
    published_year: '2004',
    average_rating: 4.3,
    num_pages: 527,
    ratings_count: 1339,
  },
  {
    _id: '633457f71ca56493a94678e6',
    isbn13: '9780007149612',
    isbn10: '0007149611',
    title: 'Breaking Open the Head',
    subtitle: 'A Visionary Journey from Cynicism to Shamanism',
    authors: 'Daniel Pinchbeck',
    categories: 'Hallucinogenic drugs',
    thumbnail:
      'http://books.google.com/books/content?id=QIMaviqqoQoC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description:
      "A new 'The Doors of Perception' for the 21st century? A visionary journey from cynicism to shamanism by a brilliant young US writer.",
    published_year: '2004',
    average_rating: 4.06,
    num_pages: 336,
    ratings_count: 46,
  },
  {
    _id: '633457f71ca56493a94678e8',
    isbn13: '9780007150304',
    isbn10: '000715030X',
    title: 'Beware, Princess Elizabeth',
    subtitle: '',
    authors: 'Carolyn Meyer',
    categories: "Children's stories",
    thumbnail:
      'http://books.google.com/books/content?id=wPBpR4AFNJ0C&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description: 'A matter of life and death - and the Throne of England',
    published_year: '2003',
    average_rating: 3.88,
    num_pages: 242,
    ratings_count: 78,
  },
]

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Lily Bookshop</title>
        <meta name="description" content="Lily Bookshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div display="grid" grid="cols-1 sm:cols-2 md:cols-3" gap="4 sm:8">
        {books.map((data) => (
          <BookCard key={data._id} {...data} />
        ))}
      </div>

      {/* Welcoming section + search  */}

      {/* Hottest books (most searched) */}
    </div>
  )
}

export default Home
