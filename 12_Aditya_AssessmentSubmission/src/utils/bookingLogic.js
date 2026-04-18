const calculateDistanceFromLift = (room) => {
  const vertical = (room.floor - 1) * 2; // 2 minutes per floor
  const horizontal = room.position; // 1 minute per room
  return vertical + horizontal;
};

const travelTimeForSelection = (rooms) => {
  if (!rooms.length) return 0;
  const distances = rooms.map(calculateDistanceFromLift);
  const farthest = Math.max(...distances);
  const nearest = Math.min(...distances);
  return farthest - nearest;
};

const pickSameFloor = (availableRooms, count) => {
  let bestChoice = null;

  for (let floor = 1; floor <= 10; floor += 1) {
    const onFloor = availableRooms
      .filter((room) => room.floor === floor)
      .sort((a, b) => a.position - b.position);

    if (onFloor.length >= count) {
      const candidate = onFloor.slice(0, count);
      const travelTime = travelTimeForSelection(candidate);

      if (
        !bestChoice ||
        travelTime < bestChoice.travelTime ||
        (travelTime === bestChoice.travelTime &&
          floor < bestChoice.rooms[0].floor)
      ) {
        bestChoice = { rooms: candidate, travelTime };
      }
    }
  }

  return bestChoice;
};

const pickAcrossFloors = (availableRooms, count) => {
  const sortedByDistance = [...availableRooms].sort(
    (a, b) => calculateDistanceFromLift(a) - calculateDistanceFromLift(b)
  );

  let bestWindow = null;

  for (let i = 0; i <= sortedByDistance.length - count; i += 1) {
    const windowRooms = sortedByDistance.slice(i, i + count);
    const travelTime = travelTimeForSelection(windowRooms);

    if (!bestWindow || travelTime < bestWindow.travelTime) {
      bestWindow = { rooms: windowRooms, travelTime };
    }
  }

  return bestWindow;
};

export const findRoomsForBooking = (rooms, requestedCount) => {
  if (requestedCount < 1 || requestedCount > 5) {
    return { rooms: [], travelTime: 0, error: 'You can book 1 to 5 rooms.' };
  }

  const availableRooms = rooms.filter((room) => !room.occupied);

  if (availableRooms.length < requestedCount) {
    return { rooms: [], travelTime: 0, error: 'Not enough rooms available.' };
  }

  const sameFloorChoice = pickSameFloor(availableRooms, requestedCount);
  if (sameFloorChoice) return sameFloorChoice;

  const crossFloorChoice = pickAcrossFloors(availableRooms, requestedCount);
  if (crossFloorChoice) return crossFloorChoice;

  return { rooms: [], travelTime: 0, error: 'No suitable rooms found.' };
};

export const toggleRandomOccupancy = (rooms) => {
  const updated = rooms.map((room) => ({
    ...room,
    occupied: false,
  }));

  // Randomly occupy between 25% and 60% of rooms
  const targetOccupied = Math.floor(
    updated.length * (0.25 + Math.random() * 0.35)
  );

  const shuffled = [...updated].sort(() => Math.random() - 0.5);

  for (let i = 0; i < targetOccupied; i += 1) {
    shuffled[i].occupied = true;
  }

  return shuffled;
};

