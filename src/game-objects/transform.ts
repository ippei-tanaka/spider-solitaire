import Phaser from 'phaser';

export const getWorldPosition = (container: Phaser.GameObjects.Container) =>
{
  let parent = container.parentContainer;
  let x = container.x;
  let y = container.y;
  while (parent)
  {
    x = x + parent.x;
    y = y + parent.y;
    parent = parent.parentContainer;
  }
  return {x, y};
};
