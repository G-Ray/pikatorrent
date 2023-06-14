// 0 - Torrent is stopped
// 1 - Torrent is queued to verify local data
// 2 - Torrent is verifying local data
// 3 - Torrent is queued to download
// 4 - Torrent is downloading
// 5 - Torrent is queued to seed
// 6 - Torrent is seeding
export const TORRENT_STATUSES = {
  0: 'Stopped',
  1: 'Queued',
  2: 'Verifying', // Torrent is verifying local data
  3: 'Queued',
  4: 'Downloading',
  5: 'Queued',
  6: 'Seeding',
}
