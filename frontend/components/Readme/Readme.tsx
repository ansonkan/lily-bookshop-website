import Link from 'next/link'
import PlayFill from '~icons/ph/play-fill.jsx'
import SmileyFill from '~icons/ph/smiley-fill.jsx'

export const Readme = (): JSX.Element => (
  <div display="flex" flex="col" gap="4">
    <h1 text="2xl" font="bold">
      Welcome to the Lily Bookshop website demo!
    </h1>

    <p>
      The is a bare-bones website is made to demonstrate the basic ideas of what
      the future website could be. The visual is basically non-existent here but
      some of the core features are functional, including:
    </p>

    <ul className="list-circle ml-10">
      <li>
        This demo website has 3 pages:
        <ul className="list-circle ml-10">
          <li>
            <strong>
              <Link href="/">Home page</Link>
            </strong>{' '}
            - the current page
          </li>
          <li>
            <strong>
              <Link href="/books">Books page</Link>
            </strong>{' '}
            - the page that lists out book search results
          </li>
          <li>
            <strong>
              <Link href="/books/633457fa1ca56493a9468e8e">
                Books details page
              </Link>
            </strong>{' '}
            - the page shows all information of a selected book
          </li>
        </ul>
      </li>
      <li>
        Book search - If you clicked on the magnifying glass on the toolbar, a
        search bar will appear, type in something, press &quot;Enter&quot; or
        click the <PlayFill /> button on the right, then you will be redirected
        to the &quot;Books&quot; page with the search results.
      </li>
    </ul>

    <p>
      Please be aware that this demo website has absolutely no visual design
      involved at all, the final product will looks better and has more
      features. Yet still I would like to update you all my progress, especially
      I have realized I am not progressing much since we have talked last time.
    </p>

    <p>
      If you are still interested in letting me to continue this project, here
      will be my to-do list:
    </p>

    <ul className="list-circle ml-10">
      <li>Support multi-locale</li>
      <li>
        Create pages for book management, including create, remove, update
      </li>
      <li>Protect the book management pages with user authentication</li>
      <li>Improve website design</li>
      <li>
        Plan on how should we digitalize all of your physical books into a
        database (Based on my understanding, most books should have a &quot;ISBN
        13&quot; or &quot;ISBN 10&quot; barcode that is a universal ID for a
        book. There is likely a free service for ISBN lookup. If so, all we need
        to do is to get a barcode scanner, then scan all the books)
      </li>
      <li>Improve searching, such as support tags or multiple keywords</li>
      <li>
        Improve &quot;You might be interested&quot; because now it might
        suggests the same book
      </li>
    </ul>

    <p>
      Or if you have any new ideas, please let me know! <SmileyFill />
    </p>
  </div>
)
