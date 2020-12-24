// import {Table} from '../models/table';
import Phaser from 'phaser';
// import {PileGameObject} from '../game-objects/pile';
import {CardGameObject} from '../game-objects/card';

export type ViewEvents = {
  CARD_POINTERDOWN: {
    pointer:Phaser.Input.Pointer,
    cardGameObject: CardGameObject
  },
  CARD_POINTEROVER: {
    pointer:Phaser.Input.Pointer,
    cardGameObject: CardGameObject
  },
  CARD_POINTEROUT: {
    pointer:Phaser.Input.Pointer,
    cardGameObject: CardGameObject
  },
  CARD_DRAGSTART: {
    pointer:Phaser.Input.Pointer,
    cardGameObject: CardGameObject
  },
  CARD_DRAG: {
    pointer:Phaser.Input.Pointer,
    cardGameObject: CardGameObject
  },
  CARD_DROP: {
    pointer:Phaser.Input.Pointer,
    cardGameObject: CardGameObject
    zone:Phaser.GameObjects.Zone
  },
  CARD_DRAGEND: {
    pointer:Phaser.Input.Pointer,
    cardGameObject: CardGameObject
  }
}
