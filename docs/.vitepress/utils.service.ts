export class Util {
  getNavLink(prefix: string = '', items) {}
  getPamphletNavLink(items) {
    this.getNavLink('');
  }
}

export const UtilService = new Util();
