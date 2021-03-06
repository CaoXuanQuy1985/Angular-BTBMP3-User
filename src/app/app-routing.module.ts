import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainViewComponent} from './component/main-view/main-view.component';
import {RegistrationComponent} from './component/registration/registration.component';
import {LoginComponent} from './component/login/login.component';
import {NewSongComponent} from './component/new-song/new-song.component';
import {EditSongComponent} from './component/edit-song/edit-song.component';
import {PlaylistComponent} from './playlists/playlist/playlist.component';
import {MyPlaylistComponent} from './playlists/my-playlist/my-playlist.component';
import {DashboardAdminComponent} from './component/dashboard-admin/dashboard-admin.component';
import {PlaylistSongComponent} from './playlists/playlist-song/playlist-song.component';
import {SongComponent} from './component/song/song.component';
import {SongByUserComponent} from './component/song-by-user/song-by-user.component';
import {ShowSingerComponent} from './component/show-singer/show-singer.component';
import {SingerSongComponent} from './component/singer-song/singer-song.component';
import {SearchResultComponent} from './component/search-result/search-result.component';

const routes: Routes = [
  {path: '', component: MainViewComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'newSong', component: NewSongComponent},
  {path: 'updateSong', component: EditSongComponent},
  {path: 'playlist', component: PlaylistComponent},
  {path: 'myPlaylist', component: MyPlaylistComponent},
  {path: 'dashboard', component: DashboardAdminComponent},
  {path: 'edit/:id', component: EditSongComponent},
  {path: 'playlist-song/:id', component: PlaylistSongComponent},
  {path: 'song/:id', component: SongComponent},
  {path: 'songs/user', component: SongByUserComponent},
  {path: 'singers', component: ShowSingerComponent},
  {path: 'singer-song/:id', component: SingerSongComponent},
  {path: 'search/:id', component: SearchResultComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
