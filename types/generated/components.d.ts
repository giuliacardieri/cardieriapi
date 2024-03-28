import type { Schema, Attribute } from '@strapi/strapi';

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'Hero';
    icon: 'landscape';
  };
  attributes: {
    Titulo: Attribute.Text;
    Imagem: Attribute.Media;
  };
}

export interface LazerLazer extends Schema.Component {
  collectionName: 'components_lazer_lazers';
  info: {
    displayName: 'Lazer';
    icon: 'emotionHappy';
  };
  attributes: {
    Brinquedoteca: Attribute.Boolean;
    Gourmet: Attribute.Boolean;
    Piscina: Attribute.Boolean;
    Academia: Attribute.Boolean;
    Playground: Attribute.Boolean;
    Lavanderia: Attribute.Boolean;
    SalaoDeFestas: Attribute.Boolean;
    Quadra: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hero.hero': HeroHero;
      'lazer.lazer': LazerLazer;
    }
  }
}
