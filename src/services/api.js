const BASE_URL = 'https://api.tvmaze.com';

export const FALLBACK_SHOWS = [
  {
    id: 1,
    title: 'Under the Dome',
    year: '2013',
    releaseDate: '2013-06-24',
    rating: 6.5,
    poster: 'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
    backdrop: 'https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg',
    genres: ['Drama', 'Science-Fiction', 'Thriller'],
    status: 'Ended',
    runtime: 60,
    network: 'CBS',
    language: 'English',
    officialSite: 'http://www.cbs.com/shows/under-the-dome/',
    summary: 'Under the Dome is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town\'s inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about where the dome came from and if and when it will go away.'
  },
  {
    id: 2,
    title: 'Person of Interest',
    year: '2011',
    releaseDate: '2011-09-22',
    rating: 8.8,
    poster: 'https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg',
    backdrop: 'https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg',
    genres: ['Action', 'Crime', 'Drama'],
    status: 'Ended',
    runtime: 60,
    network: 'CBS',
    language: 'English',
    officialSite: 'http://www.cbs.com/shows/person_of_interest/',
    summary: 'You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I designed the machine to detect acts of terror, but it sees everything. Violent crimes involving ordinary people.'
  },
  {
    id: 3,
    title: 'Bitten',
    year: '2014',
    releaseDate: '2014-01-11',
    rating: 7.4,
    poster: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg',
    backdrop: 'https://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg',
    genres: ['Drama', 'Horror', 'Romance'],
    status: 'Ended',
    runtime: 60,
    network: 'Space',
    language: 'English',
    officialSite: 'http://bitten.space.ca/',
    summary: 'Based on the critically acclaimed series of novels from Kelley Armstrong, Bitten is an emotionally charged supernatural thriller starring Laura Vandervoort as Elena Michaels, the lone female werewolf in existence.'
  },
  {
    id: 4,
    title: 'Arrow',
    year: '2012',
    releaseDate: '2012-10-10',
    rating: 7.4,
    poster: 'https://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg',
    backdrop: 'https://static.tvmaze.com/uploads/images/original_untouched/213/534017.jpg',
    genres: ['Drama', 'Action', 'Science-Fiction'],
    status: 'Ended',
    runtime: 60,
    network: 'The CW',
    language: 'English',
    officialSite: 'http://www.cwtv.com/shows/arrow',
    summary: 'After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the Pacific. He returned home to Starling City, bent on righting the wrongs of his family.'
  },
  {
    id: 5,
    title: 'True Detective',
    year: '2014',
    releaseDate: '2014-01-12',
    rating: 8.9,
    poster: 'https://static.tvmaze.com/uploads/images/medium_portrait/490/1226764.jpg',
    backdrop: 'https://static.tvmaze.com/uploads/images/original_untouched/490/1226764.jpg',
    genres: ['Drama', 'Crime', 'Thriller'],
    status: 'Running',
    runtime: 60,
    network: 'HBO',
    language: 'English',
    officialSite: 'https://www.hbo.com/true-detective',
    summary: 'Touch darkness and darkness touches you back. An American anthology crime drama television series created and written by Nic Pizzolatto.'
  },
  {
    id: 6,
    title: 'The 100',
    year: '2014',
    releaseDate: '2014-03-19',
    rating: 7.7,
    poster: 'https://static.tvmaze.com/uploads/images/medium_portrait/257/642675.jpg',
    backdrop: 'https://static.tvmaze.com/uploads/images/original_untouched/257/642675.jpg',
    genres: ['Action', 'Drama', 'Science-Fiction'],
    status: 'Ended',
    runtime: 60,
    network: 'The CW',
    language: 'English',
    officialSite: 'http://www.cwtv.com/shows/the-100',
    summary: 'Ninety-seven years ago, nuclear Armageddon decimated planet Earth, destroying civilization. The only survivors were the 400 inhabitants of 12 international space stations which were in orbit at the time.'
  },
  {
    id: 7,
    title: 'Homeland',
    year: '2011',
    releaseDate: '2011-10-02',
    rating: 8.2,
    poster: 'https://static.tvmaze.com/uploads/images/medium_portrait/230/575652.jpg',
    backdrop: 'https://static.tvmaze.com/uploads/images/original_untouched/230/575652.jpg',
    genres: ['Drama', 'Thriller', 'Mystery'],
    status: 'Ended',
    runtime: 60,
    network: 'Showtime',
    language: 'English',
    officialSite: 'http://www.sho.com/homeland',
    summary: 'The winner of 6 Emmy Awards including Outstanding Drama Series, Homeland is an edge-of-your-seat sensation. CIA officer Carrie Mathison is top in her field despite being bipolar.'
  },
  {
    id: 8,
    title: 'Glee',
    year: '2009',
    releaseDate: '2009-05-19',
    rating: 6.6,
    poster: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/73.jpg',
    backdrop: 'https://static.tvmaze.com/uploads/images/original_untouched/0/73.jpg',
    genres: ['Drama', 'Music', 'Romance'],
    status: 'Ended',
    runtime: 60,
    network: 'FOX',
    language: 'English',
    officialSite: 'http://www.fox.com/glee',
    summary: 'A musical comedy about a group of ambitious and talented kids who try to escape the harsh realities of high school by joining a glee club.'
  }
];

export function stripHtml(html) {
  if (!html) return 'No synopsis available.';
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || 'No synopsis available.';
}

export function normalizeShow(show) {
  if (!show) return null;

  const year = show.premiered ? show.premiered.slice(0, 4) : 'N/A';
  const rawRating = show.rating && show.rating.average;
  const rating = rawRating ? Number(rawRating.toFixed(1)) : null;

  return {
    id: show.id,
    title: show.name || 'Untitled',
    year,
    releaseDate: show.premiered || 'Unknown',
    rating,
    poster: show.image?.medium || show.image?.original || null,
    backdrop: show.image?.original || show.image?.medium || null,
    genres: Array.isArray(show.genres) && show.genres.length > 0 ? show.genres : ['Entertainment'],
    status: show.status || 'Unknown',
    runtime: show.runtime || show.averageRuntime || null,
    network: show.network?.name || show.webChannel?.name || 'Various',
    language: show.language || 'English',
    officialSite: show.officialSite || null,
    summary: stripHtml(show.summary)
  };
}

export async function fetchAllShows() {
  try {
    const response = await fetch(`${BASE_URL}/shows`);
    if (!response.ok) {
      throw new Error(`Failed to fetch shows: ${response.statusText}`);
    }
    const data = await response.json();
    return data.map(normalizeShow).filter(Boolean);
  } catch (error) {
    console.warn('TVMaze fetchAllShows failed, falling back to local dataset:', error);
    return FALLBACK_SHOWS;
  }
}

export async function searchShows(query) {
  if (!query || !query.trim()) {
    return fetchAllShows();
  }

  try {
    const response = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(query.trim())}`);
    if (!response.ok) {
      throw new Error(`Failed to search shows: ${response.statusText}`);
    }
    const data = await response.json();
    return data.map(item => normalizeShow(item.show)).filter(Boolean);
  } catch (error) {
    console.warn('TVMaze searchShows failed, using fallback filter:', error);
    const q = query.toLowerCase().trim();
    return FALLBACK_SHOWS.filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.genres.some(g => g.toLowerCase().includes(q))
    );
  }
}
