export function getTypeEspecifications(type) {
  const TYPE_PATERN = type.toUpperCase();
  const especifications = { color: '#fff' };
  switch (TYPE_PATERN) {
    case 'POISON':
      especifications.background = '#682A68';
      break;
    case 'GRASS':
      especifications.background = '#7DB808';
      break;
    case 'FIRE':
      especifications.background = '#E24242';
      break;
    case 'WATER':
      especifications.background = '#5BC7E5';
      break;
    case 'BUG':
      especifications.background = '#A8B820';
      break;
    case 'FLYING':
      especifications.background = '#A890F0';
      break;
    case 'NORMAL':
      especifications.background = '#A8A878';
      break;
    case 'ELECTRIC':
      especifications.background = '#F8D030';
      break;
    case 'GROUND':
      especifications.background = '#E0C068';
      break;
    case 'FAIRY':
      especifications.background = '#E03A83';
      break;
    case 'FIGHTING':
      especifications.background = '#FF501F';
      break;
    case 'PSYCHIC':
      especifications.background = '#A65E9A';
      break;
    case 'ROCK':
      especifications.background = '#B8A038';
      break;
    case 'STEEL':
      especifications.background = '#B8B8D0';
      break;
    case 'ICE':
      especifications.background = '#98D8D8';
      break;
    case 'GHOST':
      especifications.background = '#705898';
      break;

    default:
      especifications.background = '#A8A878';
      break;
  }
  return especifications;
}
