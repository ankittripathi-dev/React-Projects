const buildRooms = () => {
  const rooms = [];

  // Floors 1-9: 10 rooms each (x01-x10)
  for (let floor = 1; floor <= 9; floor += 1) {
    for (let pos = 0; pos < 10; pos += 1) {
      const roomNumber = floor * 100 + (pos + 1);
      rooms.push({
        id: `${floor}-${roomNumber}`,
        roomNumber,
        floor,
        position: pos, // 0 is closest to the lift
        occupied: false,
      });
    }
  }

  // Floor 10: 7 rooms (1001-1007)
  for (let pos = 0; pos < 7; pos += 1) {
    const floor = 10;
    const roomNumber = 1000 + (pos + 1);
    rooms.push({
      id: `${floor}-${roomNumber}`,
      roomNumber,
      floor,
      position: pos,
      occupied: false,
    });
  }

  return rooms;
};

export const initialRooms = buildRooms();

export const resetRooms = () =>
  buildRooms().map((room) => ({
    ...room,
    occupied: false,
  }));

