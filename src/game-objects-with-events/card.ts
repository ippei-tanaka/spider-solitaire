import Phaser from 'phaser';
import {emitter} from './emitter';
import {CardGameObject, CardGameObjectArgs} from "../game-objects/card";

type Pointer = Phaser.Input.Pointer;

export class CardGameObjectWithEvent extends CardGameObject
{
  constructor (args:CardGameObjectArgs)
  {
    super(args);
    this.on('pointerdown', (pointer:Pointer) => emitter.emit("CARD_POINTERDOWN", {cardGameObject:this, pointer}));
    this.on('pointerover', (pointer:Pointer) => emitter.emit("CARD_POINTEROVER", {cardGameObject:this, pointer}));
    this.on('pointerout', (pointer:Pointer) => emitter.emit("CARD_POINTEROUT", {cardGameObject:this, pointer}));
    this.on('dragstart', (pointer:Pointer) => emitter.emit("CARD_DRAGSTART", {cardGameObject:this, pointer}));
    this.on('drag', (pointer:Pointer) => emitter.emit("CARD_DRAG", {cardGameObject:this, pointer}));
    this.on('drop', (pointer:Pointer, zone:Phaser.GameObjects.Zone) => emitter.emit("CARD_DROP", {cardGameObject:this, pointer, zone}));
    this.on('dragend', (pointer:Pointer) => emitter.emit("CARD_DRAGEND", {cardGameObject:this, pointer}));
  }
}
