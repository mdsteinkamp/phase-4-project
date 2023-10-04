puts "seeding data..."
Song.destroy_all
Chord.destroy_all

song1 = Song.create(title: "Every Day is Exactly the Same", artist: "Nine Inch Nails", structure: "Verse: E5 C5(first inversion) x3 G5 F5 Chorus: E5 A5 C5 G5")
song2 = Song.create(title: "No Tears Left to Cry", artist: "Ariana Grande", structure: "Intro: Am G F G Am G F C Dm Am C C Refrain/Verse: A7 F G Chorus: Am G F Am G F Em C Dm Am C C C/B")
test_user = User.create!(username: "test", password: "1234")


Chord.create!(name: "E5", notes: "E, B", inversion: "none", comments: "Three string E power chord", image_url: "", user_id: test_user.id, song_id: song1.id)
Chord.create!(name: "C5", notes: "G, C", inversion: "first", comments: "Two string inverted C power chord", image_url: "", user_id: test_user.id, song_id: song1.id)
Chord.create!(name: "G5", notes: "G, D", inversion: "none", comments: "Three string G power chord", image_url: "", user_id: test_user.id, song_id: song1.id)
Chord.create!(name: "F5", notes: "F, C", inversion: "none", comments: "Three string F power chord", image_url: "", user_id: test_user.id, song_id: song1.id)
Chord.create!(name: "A5", notes: "A, E", inversion: "none", comments: "Three string A power chord", image_url: "", user_id: test_user.id, song_id: song1.id)
Chord.create!(name: "C5", notes: "C, G", inversion: "none", comments: "Three string C power chord", image_url: "", user_id: test_user.id, song_id: song1.id)
Chord.create!(name: "C", notes: "C, B, D", inversion: "none", comments: "CAGED shape C major", image_url: "", user_id: test_user.id, song_id: song1.id)


Chord.create!(name: "Am", notes: "A, E, A, C", inversion: "none", comments: "First position Am", image_url: "", user_id: test_user.id, song_id: song2.id)
Chord.create!(name: "G", notes: "G, B, D", inversion: "none", comments: "First position G major", image_url: "", user_id: test_user.id, song_id: song2.id)
Chord.create!(name: "F", notes: "F, C, A", inversion: "none", comments: "First fret F barre", image_url: "", user_id: test_user.id, song_id: song2.id)
Chord.create!(name: "Dm", notes: "D, A, F", inversion: "none", comments: "First postion Dm", image_url: "", user_id: test_user.id, song_id: song2.id)
Chord.create!(name: "A7", notes: "A, E, G, C#", inversion: "none", comments: "First position A7", image_url: "", user_id: test_user.id, song_id: song2.id)
Chord.create!(name: "Em", notes: "E, B, G", inversion: "none", comments: "First position Em", image_url: "", user_id: test_user.id, song_id: song2.id)
Chord.create!(name: "C/B", notes: "B, E, G, E", inversion: "none", comments: "Drop A string on C chord to B", image_url: "", user_id: test_user.id, song_id: song2.id)

puts "done seeding!"