describe('Tributo a Um Ídolo > ', () => {
  beforeEach(() => {
    cy.visit('tribute.html');
  });

  describe('Cabeçalho > ', () => {
    it('Deve ter um título principal', () => {
      cy.get('header h1').should('exist');
    });
  
    it('Deve ter um parágrafo de abertura', () => {
      cy.get('header p').should('exist');
    });
  
    it('Deve ter uma imagem ilustrativa', () => {
      cy.get('header img').should('exist');
    });
  });
  
  describe('Ficha de Identificação > ', () => {
    it('Deve ficar dentro de um `<aside>`', () => {
      cy.get('aside').should('exist');
    });
  
    it('Deve ter um subtítulo', () => {
      cy.get('aside h2').should('exist');
    });
  
    it('Deve ter uma tabela com informações básicas do ídolo', () => {
      cy.get('aside table').should('exist');
      cy.get('aside table tr').should('have.length.at.least', 3);
      cy.get('aside table tr').each(($el) => {
        cy.wrap($el).find('td').should('have.length.at.least', 2);
      });
    });
  
    it('Deve ter uma pequena imagem do ídolo', () => {
      cy.get('aside img').should('exist');
    });
  });
  
  describe('Introdução > ', () => {
    it('Deve estar dentro de uma `<section>` com id `introduction`', () => {
      cy.get('section#introduction').should('exist');
    });
  
    it('Deve ter um subtítulo', () => {
      cy.get('section#introduction h2').should('exist');
    });
  
    it('Deve ter pelo menos 2 parágrafos', () => {
      cy.get('section#introduction p').should('have.length.at.least', 2);
    });
  });
  
  describe('Carreira > ', () => {
    it('Deve estar dentro de uma `<section>` com id `career`', () => {
      cy.get('section#career').should('exist');
    });
  
    it('Deve ter um subtítulo', () => {
      cy.get('section#career h2').should('exist');
    });
  
    it('Deve ter pelo menos duas subseções com subtítulos', () => {
      cy.get('section#career section h3').should('have.length.at.least', 2);
    });
  });
  
  describe('Conquistas > ', () => {
    it('Deve estar dentro de uma `<section>` com id `achievements`', () => {
      cy.get('section#achievements').should('exist');
    });
  
    it('Deve ter um subtítulo', () => {
      cy.get('section#achievements h2').should('exist');
    });
  
    it('Deve ter uma tabela com pelo menos 2 colunas e 3 linhas', () => {
      cy.get('section#achievements table tr').should('have.length.at.least', 3);
      cy.get('section#achievements table tr').each(($el) => {
        cy.wrap($el).find('td').should('have.length.at.least', 2);
      });
    });
  });
  
  describe('Referências > ', () => {
    it('Deve estar dentro de uma `<section>` com id `references`, localizada dentro do `<footer>`', () => {
      cy.get('footer section#references').should('exist');
    });
  
    it('Deve ter um subtítulo', () => {
      cy.get('footer section#references h2').should('exist');
    });
  
    it('Deve ter pelo menos 3 links de referência', () => {
      cy.get('footer section#references a').should('have.length.at.least', 3);
    });
  });
  
  describe('Geral > ', () => {
    it('Deve ter pelo menos 10 elementos de formatação, como negrito e itálico', () => {
      cy.get('b, strong, i, em, abbr').should('have.length.at.least', 10);
    });
  
    it('Deve ter pelo menos 2 elementos de lista', () => {
      cy.get('ul, ol, dl').should('have.length.at.least', 2);
    });
  });
});