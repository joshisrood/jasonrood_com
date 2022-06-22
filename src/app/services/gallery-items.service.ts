import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { GalleryItem } from 'src/types/gallery-item.type';

@Injectable({
  providedIn: 'root'
})
export class GalleryItemsService implements Resolve<GalleryItem | undefined> {

  constructor(private router: Router) { }

  public getList() : GalleryItem[] {
    return this.GALLERY_LIST;
  }

  public getByID(id: string): GalleryItem | undefined {
    return this.GALLERY_LIST.find(galleryItem => galleryItem.id === id);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): GalleryItem | Observable<GalleryItem> | Promise<GalleryItem> {
    const path = route.paramMap.get('path')!;
    const foundItem = this.getByID(path)
    if(typeof foundItem === 'undefined') {
      this.router.navigate(['']);
      return EMPTY;
    }
    return foundItem;
  }

  private GALLERY_LIST: GalleryItem[] = [
    { 
      title: "Can't Shoot the North Sky", 
      id: "CantShootTheNorthSky",
      url: "https://lh3.googleusercontent.com/pw/AM-JKLU37TXANsGA-xSf0JmlK2q3ByrobIEIWs_MWCzyXiESX4M1mFRScAqwkeh5D3fo_Pma6Or7BbQzAsCR6QvAPqbToBZ0Y0wOlxk5ODmyzlCcW3WBRZpsJMJcRtnCfssQTBX1OnlkrM-_bMm_iiwMvHNr",
      originalWidth: 4622,
      originalHeight: 3356
    },
    { 
      title: "Dance Party", 
      id: "DanceParty",
      url: "https://lh3.googleusercontent.com/pw/AM-JKLW4zVcGHcliztg8OEWlnHyj380hhlTtN9dbS9fUtW6PYXQiJdWeaCJ30NrZi3nESfcQQukhAPshk6PbRyWURQb7XiSqqN2VASkKoSSEc1-rSx2Twivh34BzaA9bzAnSSJd8p816OZFHDazMCk8QIKRT",
      originalWidth: 2200,
      originalHeight: 3000
    },
    { 
      title: "Food Fight", 
      id: "FoodFight",
      url: "https://lh3.googleusercontent.com/pw/AM-JKLXi2CYTJcYT1H3DS7-LJ_fORundyuJd1eLZTzRFqlyjUY6kEcHcfWGgov1EQZHh4JkLZezSiZ1qdf8DOYEJ7Ubpkk-8CnuZYFAZloqxCDaV4yubpm8D7eeuy5AMLMDQR47J4I_5q9SlNRP9X2zOgJ3T",
      originalWidth: 3000,
      originalHeight: 2200
    },
    { 
      title: "Hipsters vs. Animals",
      id: "HipstersVsAnimals",
      url: "https://lh3.googleusercontent.com/pw/AM-JKLXjyQnL6VmAz6mRjowt3ppy1G5oXDMadxzZxN_2hiWA5Q9Sep6O3NB1pUtYXj5C9n0y4gZcAGOMfigJnOaBo32gsHNVkS5sTM6VtdFtD8i68SBl21ZbcSr0yOSyc6nP9_l0Cp-jBMOjp16x_HEvdGmC",
      originalWidth: 3000,
      originalHeight: 2200
    },
    { 
      title: "I Have Seen This Movie Before",
      id: "IHaveSeenThisMovieBefore",
      url: "https://lh3.googleusercontent.com/pw/AM-JKLXREmvDkhY1QwxxeXclbC0HWKiTpGnk50jQeXvqPUkT_XkWPrls3vWaIRwZUMYxVmD68H7LrM2oXkbUIQeFgQx2Zph5puY7FY00HoYsOtBbhF30qy6uTm1IrF8Qc-NxE0pdmyPijqLQKM5oPWRcvRe9",
      originalWidth: 3000,
      originalHeight: 2200
    },
    { 
      title: "I Wish I Knew Kung Fu",
      id: "IWishIKnewKungFu",
      url: "https://lh3.googleusercontent.com/pw/AM-JKLWKC7cnt5BLkXOdj4CioonocExOUmlCArfMs3MiWnNARZvgE1P5c6F4_6xm2-KOMqQgrazruuaSteECjJqVnkySbirZGEsaTTr5xWkl9BSaue-UA1AuaVDwTKW0biXfE1QpznnJUoeNY7QjaLJsK0go",
      originalWidth: 3000,
      originalHeight: 2200
    },
    { 
      title: "Lights on the Water 1",
      id: "LightsOntheWater1",
      url: "https://lh3.googleusercontent.com/pw/AM-JKLWZy2vSiJ5NuXvgCSWVh7hDoJUOezTgZQKE7zypnF-JE5_3pQgqL9LbjSoFjW01HSblYAeptAwUW4Iw_UedIPTsyYMxFsqscLm7LSrWbFmb6g2hNkFmt7C-1_aeRLV09zVJ74E67SCUMGPrBrJ3yo_k",
      originalWidth: 1100,
      originalHeight: 1500
    },
    { 
      title: "Lights on the Water 2",
      id: "LightsOntheWater2",
      url: "https://lh3.googleusercontent.com/pw/AM-JKLWHf_iV1J3HMEGEC2NFiTUeU_82F-WAXqKUEglj4MIJNJYVQbbkgfFRk71pq0Jhkocz_n6-qlDx1BQQ4GwoOFMjfmTpfowgEHDROtkHyJ5aQ0Wn-hRLwCAx1rSIZrywn7tRsjmWpYkcPAOydh6L6L_P",
      originalWidth: 1034,
      originalHeight: 1486
    },
    { 
      title: "Lights on the Water 3",
      id: "LightsOntheWater3",
      url: "https://lh3.googleusercontent.com/pw/AM-JKLWx6oijmgQr6HIQHKGJ-bBZZU2XYty18GAXLl3DkXXPvx0kqOilSjwRbDY8X9mK7MFeXE1nEO79XUbIywU7NsK8S_M1xVxjXJNfHmt-nxq_BHhZ1GC-49tnUGmxxV9GX-Yxo5aiaq_SYfaSDFNuODyJ",
      originalWidth: 1084,
      originalHeight: 1488
    },
    { 
      title: "Paper, Scissors...",
      id: "PaperScissors",
      url: "https://lh3.googleusercontent.com/pw/AM-JKLXIgbxqZL9RGGdXrlkUuXm02UOFivpKm4mau-BxH-w2-VHMd_OGpdAeD9v-Ag_X57qVNtlhd5w-5Q6s2mlZJp3aLuxYUmnrJFJwo4e_iolzMMdD63AvuMPkv262_v6bxY-MCWBxqPrNLUyKf4ImMvST",
      originalWidth: 2200,
      originalHeight: 3000
    },
    { 
      title: "Pool Party",
      id: "PoolParty",
      url: "https://lh3.googleusercontent.com/pw/AM-JKLUKKmGrRCdohmTqOCYMJErk2GLBVLdjiBwdh20FFRMx9mRhnOwBjD9hkofDHXu6k0Mgov5w0JdNiAw6NQCE3SSbhcfHUEKpYcqyAiNzHdFJ7574grH8FbpXN4bOQocj1FxR0bgAJwUaccQFg69KN1bC",
      originalWidth: 3000,
      originalHeight: 2200
    },
    { 
      title: "Spaceman v. Samurai v. Luchador v. Kung Fu Masters",
      id: "SpacemanVSamuraiVLuchadorVKungFuMasters", 
      url: "https://lh3.googleusercontent.com/pw/AM-JKLXMXuMh3VQstC-UwdH1wM02_jZomG9ATQZo7IDir8qNqnj-DZ0cjjgTcrd20TfApuwHzzlPu5ToQUEohdxh1Ne-4WbJyiwAztrqa5bDQUS5B-MdMRpgl_ybLn5YeqxTsJxDDhx8fEbDacO7TpxYzgiw",
      originalWidth: 2200,
      originalHeight: 3000
    },
    { 
      title: "Tea Party",
      id: "TeaParty",
      url: "https://lh3.googleusercontent.com/pw/AM-JKLUz3OKFkJAKx9MhVDzebyQrZN98-7Wqf80YnzY5R__VE8u0BvWHWWfs_kxKE5d7mMKwYqWTpzIl0AUvgMh2rSqoxsMrhqI88zZUX0jGcoz9wsiYovZ80cqo6-Rm-ddE-JGyi2JMxrO8uVJ4bkCVZ6jS",
      originalWidth: 3000,
      originalHeight: 2200
    },
    { 
      title: "Ten Thousand Dollar Pyramid",
      id: "TenThousandDollarPyramid", 
      url: "https://lh3.googleusercontent.com/pw/AM-JKLUCYP3rjDfMG7EOs14z1K-tMK7GqWLKJT_fJPO9gtpUDuXcAaYjf_DAYgF3-Ub6OMUxI9cNLVRLB950iEtGLnwbMKI54m7MTukT8wqiTSDQBm3gAN1_Kj3DV6G0LDvsX7p6x1hCHd03IwO88frh7B5V",
      originalWidth: 3000,
      originalHeight: 2200
    },   
    { 
      title: "Think Tank",
      id: "ThinkTank", 
      url: "https://lh3.googleusercontent.com/pw/AM-JKLWE-4Wk0_ZOvd23HwMXx_URNoDa1RSOmuA5q7VkrfU7tI3yLQM0eF1Jb0LR8VquGFSgsqtYOseOIl4LW0JpsFE33_acXbNAAHlZ51AovOTDuZL2YFrqNoDop89aZvLZcYj-3hVhwV_JzI0GupEye7Ll",
      originalWidth: 2200,
      originalHeight: 3047
    },
    { 
      title: "This is All My Fault",
      id: "ThisIsAllMyFault",  
      url: "https://lh3.googleusercontent.com/pw/AM-JKLUdxONfy1LmskSurp0jaMCSCFdecaRF7yr5chX5Ri8VJ34O-oOc-Cv_7vsKaoxnuP--2UW1LIqEkD0v74dOLIkbm_I7kg3QHCcatbeBPWBQExG_sm8QVkNgdAZyZT_xmbI3csaTLsCtszKU2Ts9Yvax",
      originalWidth: 3062,
      originalHeight: 2200
    },
    { 
      title: "What the Rock Is",
      id: "WhatTheRockIs", 
      url: "https://lh3.googleusercontent.com/pw/AM-JKLW3OdKdEdKj1qlYbKMLt50StGmqerXjkeEX-F1pJ6oQ3lF7S8-6dabkIAg7BXy-MfnIkDYP4AoJmtZGXQ70A9hE_-ZH8KwH9jiizCRqxUaXsUphVRQHteMgQR5U1BZEItgEOly-J0UlS1lSifV3bz8r",
      originalWidth: 3000,
      originalHeight: 2264
    }
  ];
}
