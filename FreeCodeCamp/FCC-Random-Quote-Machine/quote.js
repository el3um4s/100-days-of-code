function nq(quote = 'ciao mondo', author = 'hello'){
  return {
    quote: quote,
    author: author
  }
}

function randomQuote() {
  const randomNumber = Math.floor(Math.random() * (quotes.length));
  const { quote, author } = quotes[randomNumber];
  return {
      quote: quote,
      author: author
    }
}

const quotes = [
  nq('The Way Get Started Is To Quit Talking And Begin Doing.', 'Walt Disney'),
  nq('The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.', 'Winston Churchill'),
  nq('Don’t Let Yesterday Take Up Too Much Of Today.', 'Will Rogers'),
  nq('You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.', 'Unknown'),
  nq('It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.', 'Vince Lombardi'),
  nq('If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.', 'Steve Jobs'),
  nq('People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.', 'Rob Siltanen'),
  nq('Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.', 'Og Mandino'),
  nq('Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.', 'Mohnish Pabrai'),
  nq('We May Encounter Many Defeats But We Must Not Be Defeated.', 'Maya Angelou'),
  nq('Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.', 'Johann Wolfgang Von Goethe'),
  nq('Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?', 'Brian Tracy'),
  nq('We Generate Fears While We Sit. We Overcome Them By Action.', 'Dr. Henry Link'),
  nq('Whether You Think You Can Or Think You Can’t, You’re Right.', 'Henry Ford'),
  nq('Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.', 'Helen Keller'),
  nq('The Man Who Has Confidence In Himself Gains The Confidence Of Others.', 'Hasidic Proverb'),
  nq('The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.', 'Franklin D. Roosevelt'),
  nq('Creativity Is Intelligence Having Fun.', 'Albert Einstein'),
  nq('What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.', 'Don Zimmer'),
  nq('Do What You Can With All You Have, Wherever You Are.', 'Theodore Roosevelt'),
  nq('Develop An ‘Attitude Of Gratitude’. Say Thank You To Everyone You Meet For Everything They Do For You.', 'Brian Tracy'),
  nq('You Are Never Too Old To Set Another Goal Or To Dream A New Dream.', 'C.S. Lewis'),
  nq('To See What Is Right And Not Do It Is A Lack Of Courage.', 'Confucious'),
  nq('Reading Is To The Mind, As Exercise Is To The Body.', 'Brian Tracy'),
  nq('Fake It Until You Make It! Act As If You Had All The Confidence You Require Until It Becomes Your Reality.', 'Brian Trac'),
  nq('The Future Belongs To The Competent. Get Good, Get Better, Be The Best!', 'Brian Tracy'),
  nq('For Every Reason It’s Not Possible, There Are Hundreds Of People Who Have Faced The Same Circumstances And Succeeded.', 'Jack Canfield'),
  nq('Things Work Out Best For Those Who Make The Best Of How Things Work Out.', 'John Wooden'),
  nq('A Room Without Books Is Like A Body Without A Soul.', 'Marcus Tullius Cicero'),
  nq('I Think Goals Should Never Be Easy, They Should Force You To Work, Even If They Are Uncomfortable At The Time.', 'Michael Phelps'),
  nq('One Of The Lessons That I Grew Up With Was To Always Stay True To Yourself And Never Let What Somebody Else Says Distract You From Your Goals.', 'Michelle Obama'),
  nq('Today’s Accomplishments Were Yesterday’s Impossibilities.', 'Robert H. Schuller'),
  nq('The Only Way To Do Great Work Is To Love What You Do. If You Haven’t Found It Yet, Keep Looking. Don’t Settle.', 'Steve Jobs'),
  nq('You Don’t Have To Be Great To Start, But You Have To Start To Be Great.', 'Zig Ziglar'),
  nq('A Clear Vision, Backed By Definite Plans, Gives You A Tremendous Feeling Of Confidence And Personal Power.', 'Brian Tracy'),
  nq('There Are No Limits To What You Can Accomplish, Except The Limits You Place On Your Own Thinking.', 'Brian Tracy'),
  nq('Keep your face always toward the sunshine—and shadows will fall behind you.', 'Walt Whitman'),
  nq('It is always the simple that produces the marvelous.', 'Amelia Barr'),
  nq('The world is full of magical things patiently waiting for our wits to grow sharper.', 'Bertrand Russell'),
  nq('Let us make our future now, and let us make our dreams tomorrow’s reality', 'Malala Yousafzai'),
  nq('All you need is the plan, the road map, and the courage to press on to your destination.', 'Earl Nightingale'),
  nq('The glow of one warm thought is to me worth more than money.', 'Thomas Jefferson'),
  nq('Once we believe in ourselves, we can risk curiosity, wonder, spontaneous delight, or any experience that reveals the human spirit.', 'E. E. Cummings'),
  nq('The power of imagination makes us infinite.', 'John Muir'),
  nq('Try to be a rainbow in someone’s cloud.', 'Maya Angelou'),
  nq('I believe that if one always looked at the skies, one would end up with wings.', 'Gustave Flaubert'),
  nq('I dwell in possibility.', 'Emily Dickinson'),
  nq('Light tomorrow with today.', 'Elizabeth Barrett Browning'),
  nq('I arise full of eagerness and energy, knowing well what achievement lies ahead of me.', 'Zane Grey'),
  nq('A No. 2 pencil and a dream can take you anywhere.', 'Joyce Meyer'),
  nq('When the sun is shining I can do anything; no mountain is too high, no trouble too difficult to overcome.', 'Wilma Rudolph'),
  nq('Happiness is not something you postpone for the future; it is something you design for the present.', 'Jim Rohn'),
  nq('In a gentle way, you can shake the world.', 'Mahatma Gandhi'),
  nq('Let your life lightly dance on the edges of time like dew on the tip of a leaf.', 'Rabindranath Tagore'),
  nq('Follow your bliss and the universe will open doors where there were only walls.', 'Joseph Campbell'),
  nq('Each day provides its own gifts.', 'Marcus Aurelius'),
  nq('Happiness is a butterfly, which when pursued, is always just beyond your grasp, but which, if you will sit down quietly, may alight upon you.', 'Nathaniel Hawthorne')
]
