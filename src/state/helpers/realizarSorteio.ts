import shuffle from 'just-shuffle';

export function realizarSorteio(participants: string[]) {
  const totalPartcipants = participants.length;

  const shuffleParticipants = shuffle(participants);

  const result = new Map<string, string>();

  for (let index = 0; index < totalPartcipants; index++) {
    const friendIndex = index === totalPartcipants - 1 ? 0 : index + 1;
    result.set(shuffleParticipants[index], shuffleParticipants[friendIndex]);
  }

  return result;
}
