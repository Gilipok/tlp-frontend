import { IEnum } from "."

/**
 * Page constants
 * @author tree
 */
export class Page implements IEnum<Page> {
  /**
   * For values() array
   */
  private static _values = new Array<Page>()

  public static readonly TOP = new Page(
    1,
    "Home",
    "Home page",
    "Home page - TLP",
    "This is TLP website homepage",
    "/"
  )

  public static readonly ABOUT = new Page(
    2,
    "About",
    "About this site",
    "About Us",
    "Site about page.",
    "/about"
  )
  public static readonly CONTACT = new Page(
    3,
    "Contacts",
    "Our contact",
    "Contacts",
    "Site contact page.",
    "/contact"
  )

  public static readonly REDUX = new Page(
    98,
    "Redux",
    "Redux Sample",
    "Redux Sample",
    "Basic redux examples with typescript-fsa and immer.",
    "/redux"
  )

  public static readonly ERROR = new Page(
    99,
    "Error",
    "Error",
    "Error",
    "Error.",
    "/error"
  )

  /**
   * constructor
   * @param number page id
   * @param pageTitle page title
   * @param pageDescription page description
   * @param title seo title
   * @param metaDescription seo meta description
   * @param relativeUrl relative url
   */
  private constructor(
    public readonly id: number,
    public readonly pageTitle: string,
    public readonly pageDescription: string,
    public readonly title: string,
    public readonly metaDescription: string,
    public readonly relativeUrl: string
  ) {
    Page._values.push(this)
  }

  /**
   * Instance array
   */
  static get values(): Page[] {
    return this._values
  }

  /**
   * @inheritdoc
   */
  equals = (target: Page): boolean => this.id === target.id

  /**
   * @inheritdoc
   */
  toString = (): string =>
    `${this.id}, ${this.pageTitle}, ${this.pageDescription}`
}
