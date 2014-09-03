'use strict';


angular.module('messengerApp')
  .controller('MainCtrl', function ($scope, $http, $timeout, Message, Config) {

    $timeout(function(){
      if(Config.autoImport){
        return;
      }

      //デフォルト表示の作品を読み込む
      var res = {
        title: $('.title')[0].innerText,
        author: $('.author')[0].innerText,
        text: $('.main_text')[0].innerHTML
      };

      Message.load(res);
      Message.authorImgs = [
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3dcFBXxi5BjtGHJumfKzk6bA-u9Tzud993ALFHdg7ouqVHRbB8g',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9daKTwlOJpC0lq_OsGV_VLW1LuOgVCdndCpZmYmV6ALCJd-JjYg',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSFFhuiO5SSdXbP79E07GPb5Yjxkl-YUGu89WefmB_DBu6gsOJFEQ',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUp4tdWaZotoiunWgTbOlavij5ZPx2C_iwDm0iV-SApTw69v-zyQ',
//        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQX67Z8Ci9WlLGFbQyoc-1KdYfQeJTH0V3fy2R3bElD8XLLF6hY',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRa0vehfBFmbO6G3hBlXY_RWnBCX87HysqNGqTaGg07C4wuj1gS',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTn_j-2LAoZEZoHNlw7ZIuZKIxMO0x9TGeGvtnDSG_zd7uApqCx',
//        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8JeyNlpFBffHi45uZEVaTfNOXXmLgtxr4C1rLSC4mWLlktqEFg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuhKvug95rYynfBo-eB3sJbZPTR6zLd8-O0EbJfLdRVHPdX_7CPw',
//        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvN1eQYMb6MRsFZwCCt4Nx7LRrJni2TVaE1GF1oCVY1j7M5ASr',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvCVhoFeSBf3NSCIGNw0GrUoI4s-R9hTRiA4PgmiT_HvH2YHDW'
      ];
      Message.titleImgs = [
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQHbA23Ab9E0KAoM5mAvD5dsZ_DLotz4n4loiwerJKWkuzJ0sQmQ',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXKw3Bo7ydxNEn7xOA4K9nLPcaSmdBCGeqVbEONI9mwAO6dC-K',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRQkP1My0fOJIz0bhtNAKoHKD71nrNbxCTy5kHGD3PwBqlflXkgsQ',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUCPybwGCKzx0sy97S7EsECPxHAS8Il6nb232pVZ3B8dVVQv6fWg',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRk71rRPATVIzhFDtfjHvWscZUVOnG-mY-y-zFjNmMo6l6tvCs6',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTtQYy-1TnJhj9H4ewrXC-EPSpKM7RsruORB2AWaoayp-BK_ED82w',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9igCCSyGSQuYuT5_rdqaNNDmntFbnUEPtxq3lhqf1-Mdq7L_R',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_cu9fzus-qb08eaibLjIsZcqyV-ULY4wRpY2PmaUlUSyJ66dX',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSCzMb-VZO3OEfR6PgjBjEeoQrCKKUiWKz8Bp21m9tkKwujZon6',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSiarfhlb07zaQfGaE678F-nVsetIlIu73jvnaL5c5K1UgWW2Ke2w',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQa3qDhqEZIvQ6B__gT1yy9pjwEbGsuCTG6XE4AjLMq9DPYSCAW',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfJL98GgY8ERGBPAuMg2fqgkQsTU90FmnQCNMP9BBJ5L_bSr1M',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRc36hNMSPU39u_5AZXOG6XMlK5EpGly6tCp8_iv-fvZfE7f503QA',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR5QrMT8z-g3YmXcxWie-Cj0R_XDFfW2o4zqbbg8q3pTOr85RkZfw',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5virnX-qiAuiYFSNtFzrRMIA-uTjzt18Ocja0nKTSTaQ83POR',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRqIStoGXGIJ96MUearhsGJI40iP6MzgWJ7OTzccTyiLm7XRdIp',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWmWjuksUG4xybSDHkp1xeGuHyW8BwEdxiLHbm8kBBByBpbtjp',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGdkoBQI8C7d-yBj2JskXt8Cwkq5NFmTf9Y1krDiql8lQeZIqf5g',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ-UU6vZwMb_ShQ7bHb07WKqTHCEs9Yv3KsYsdgVk2O2NEsbuJf',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSA6LT8Ij-MZoqf8L3kXQChrjAOerhh9is_17wrXuxMYzLYhgtZw',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZRhlkvitQpiMgon0i5bru4PodZlsbz6-I49VTjF32Szm7ANiGTA',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRx48BuC0USeC7izwvEPnQj53VdVxsYZxQgdj2MONe9TOrTDIAyMA',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTw8uwGYpcHblOcm2OfmPkzT9peBDlf9MnXm58xqrUdfZjA-LeH',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQJENIlJTR8EBltaLLYMMC4ujvKmumDhqd-l0ZxAqpCFp3vqM89Gg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmDkPr2hxb_ZnqVr4gBKwSyqRey712IJMWmleyxb3Tewx7UA0R',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRdGBfAxieVmvWMAeoJ_Js_W0O3O2PPW4j0tHLRf-xLp959TrbMlA',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRgEfAW08unmtDb68-NDdMnZzievKqbMVCEw1irbfTtxUMAI2IaMg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QRyN2R5Xln4jcB6qenn5VoZuTYKDT6nmJgzOpYo_mVzd65PPWw',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7PQ4pWsD2_vB5VIxsQ62bBNNwKceHgYynZJFY8WiCMAklCHIQ',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfNzQj-ljMkGjLEfHuh-e0zTSMOZSJtbJWgKMpcWhMx_WIDYFdDw',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWA0OWoTBDFWmTcbav5j7o6Mbt64xOD-aBO7mu2UIcJtaKo7Lx',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSzeUHBLewDHus5vFBHO6nvQjtm1AS8DZMHIO6pE3E6VFtD3_41wQ',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYX9kOmQnXi45DTxrbGjZHnAL6djNA9NeK9-9tgrVe-wSQ42Pn',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUmpvvXeH_dKhQpoWxM2yrTGydTEdQDt8RV1JK690TJso2WdgTqQ',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQPFwRcNbkfW68lUThc2Al8U4zXA3_vMBUWqxqKvo49aUkF3WNK3A',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS-ttjnZLBO8EIDguRrIDHi8a3qYn-UlnbojdkXIBeJhUpQwOi6',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQolnd-mLsBlB-UTmTpGgJzaadUfl8EGG_MTFx4Ve9dIUjiBwoyQw',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3g9l-d_1x2WhEJOmrLx_9HoM8eK-C4xsVttZPzb9UbpV4BEjc',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSFKiIzfCLu4qKE5mpghhkFiN2RI5zYq9aIhgSsAXy6tSvV5TNH',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRIx9Ud7cVZE_PdJXrMcJg3Xlq1AVy6wyoI1_FEPq-XXG7GFT3l0Q',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRW8PpjhswFwBY3w0eAI99WTteMW2o4jJn8NLkSnF70a9n8kt3T',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTUsiLKhoPMkrwDox4i-2hDN_9NvzRmg6Q-G381hqTLQToLo0ihXw',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-9-327lq1iwyy-p3ftqAKNu6JImYv3wsLv9aIDJGwrNfJy8wE',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHV9Ij-e-v1rHGqm8ExyxNRzuoZfEZCjTYewInw4_fVpd5NqcfxQ',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiOm5l1AbP3MpgnWtaDEi05VSQ8r4MhX8AcwcV8zcnv20qIY8R',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3pmWy7E3hrKWHq38kOrjcyQQSlY_A7UfQAHkcqXnejRhrYDo5',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRzP71KKKhqUhbbYAR_lB7FKChGKR8MQAAm5IFO70eqEk95qk8N',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQa_dqR5lsc--x8SvBw72GO3L1oyUkGV1Lj2rbLn-kTVCYNbPlv4A',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTzyC9PwaIEzFmCOostc_2Wm94N9gBsYVBgknMvGnoOsKWmWRQAGA',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTiKcPGZyaOFizAkZMY2T1ne6wWSvX1UXHvSOTg8D91L3t2mtNn',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRHz9UuiqdWxR90kHJF92SWeSeNqLtCY8wHANBc3S5aKTv-WCIQ3Q',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUaNiISBNbxQ8ZA3_OU8v5ebeKIwRNqKTLag5PYAmjUJMe7tlm',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSs_PZvuCzuePxSUlrnrAPg23fZaQBvaoEtKIPjj1JABqI4vpBD',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSExQ-QRcHM0TvplCR4CrJRGA06kgd-CECnaFnmFZrJZBDZXYcv',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWpQ726Etuh4Ph4_jOvCfcl6iBKc89_nlrMnnfAZycsoNt5SFr9A',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTK3VlqNwZHRzfdqxUjBcNoL-bagdwiQixT0bA6F7fz8kxlUtC2',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSwm8QVR2toVLhGepbAiR8CvTe589LE4ew8jLHFG8ql98Vb6d5ezw',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTm8VltQhj1251WxFAjnx6xnCorHWkmgax6CaSrKSRA6chP7RSn',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55xXI7XjxGKdqM_ZdzBTJ_wORYVwp3I_eP0v2TI_Hxu_yFl-3Cw',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRO_W2dYVjmJ_fsAR7brv7HmoaTIZ-BRknJhukhtct8Dd7lF2q-',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLufbTrn4FyVx0Okx98KuylGYj5D6RAyzEpagu6JbxT8xc4WAK3Q',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzTxp0PMC3JXy5VlDGBIrTt3iDmN8QELOXlCSlL7eKE1NvNOm0Sw',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcACVoOD5hBYb_eqFPOBYYhY14v7hwPvfEl-8RgmabYsSoJ8Vr',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ7-SYYWi3Vf-mNHm68z9gqvyjwvGVMGmp_rvrCZRoMoW9jjyqgoA',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQWDm6LWYoe8EBKKlo7n2dgdQErqEPvcxW73vKw5FmCZDwiHgl5',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSK-0NlV29LScNYlHHJgcYt-L-q_WwBsG9k8HzGydl8KFHm7067gw',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTW4c5h1Z7O0yjB2d9AIC1hvShoigk8soSFfLIMQADggKPPomGy',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSZkOWQ_ZKO4R6A3VeF6yV1GKM82oKExdKC_mDgrRXvh4r8_pYz',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS2W4P6gdbPJBaLqdq8nBVxsUtOLF_M-TEQpuxSQQeQNhmlLdJ7',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0IOQc2YLU3_BUzt5mf1qlDmtCkOoPdy1KDiqHB3N1gMW48x8Qlg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3moX9CDk1zlsIICIArVSEOMJj-rnOW9CfqwhBH6R53wN7X-lr',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQE7HmmV4BrhJUj5NfgjZNpllYBuDQLkVHQjorTkXkb5FXx9ILo6A',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ_6Hs02gKDOitbYrjtwSmhRLRPNxOSN4cD5GbDDmI9NIyaxCFFBQ',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQd9_Pes4u72yLFzB0cCecxifxYVVAvt17Uj4cmuZrRUjZZnz6v',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_7_xSNHuGf3efl5mtubvAS_SmIRD4Q935xdeYvFhMTAOFO7nr_Q',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6y0SxFgBgOnfigg0ieX613DwoGRRp3VsA-b0OW2W82t9_MvcV',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSPjxxNDIG00iSVC8fjtyK9n7brn33K5hG--2TRR1u3yVK8ADg',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwINlfJTWrDYgffJSSeivwfCUrHF8_NG5PcNNStciv73by8sgw',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpw2qN2flIRnOBthDxnl7Hf8w0apWIcrL2nfv7dwvktInhEQ4',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT4bYzS_MsuEj36whp3xFqvoi32msiKO6qj9QuQas1kAazX-Iov',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdpsyFSHkUkvx_cbjgiq91ZyDHAWoZEmr-k690Gv-ByPol5pJy',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSUeRjzVHVKu2_OkCqGF43JQMbqx5t_UWDCZhj2pRQ4Jds_Dno0SA',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQVjuSrEUOXTHjmdoD77kAbJk3lobYGNVGb-ToQgP4XAfHWxCYEqg',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSe3b3KlOXGZtQB1kXkZtitkpEL5nRERUqSU_KIC35H7kxkukMM',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIoOfLOxGPNoWUQ9R8inNqEzJqWSYWt8SxNQNinQBV5-FjhYkdQw',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ4FElJmio7qxDT9zUpnysgTphLdcH8-C4C-MTWpeGcAX0Vy4i_',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTqQX63bWIEtLgCp2E8-ULoTp3AHzeImtpHRU3mntoreEx5JdLb',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYZsuJq0AjOtTFwZAuVLxqns9CWNA6NlfOxgW7pM6t0NHPicvf',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRL0TzBTSeZYI-BPaKMAb0GdU8ePvu7RFn8C4gX6WNHS_mkB03oog',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0eGXEtMc0_GATSJmIRyFK3NaXUOvIfG44Kt40G9clCoHMF_3cqw',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSqxjpC05LUeMDj990ndYOKCaz2TKl8GNeFOCP8Pjo17E__7hUmUA',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSjmLrrXk2k5iyhWQpYyk9v6r-htryWa3p2Xz-XA3FrPJgJZR77LA',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQGgv5U9BUxLPZ_SVBVSP_ugb6MnmwuX-SqUA9MLvPQsD43BZZT',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcROwmzF95L7NpNmEOr4tjBzXtuaq3k52twnlpIqbbziQtcFsbliow',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkaY71eLrTRnaSYj1_RFxI9wDo5jXiLSTIlV82aIkPDWOBe24ACg',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSMim2gSnDNGFZtXEFbsKi7zMmAypmhDi-5MhGoqYhd644U9QqByQ',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQoVc2jGFtLVl7iMuUEbMucaFIaTim2yrtVGT5upi547m4gN72mFw',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjk76ZrcknnP3RaQ6AO_cKKtA5qUfn5Xm5eOWDFI44SXQjwBaEqw',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2XL2_r5kq-iFgXPPByouACQhH_bTY0mrWzOIWXIiIg8LXIR8k',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTd5VrKdv7LtDwA4KWQPkJ1lM-TOHpBhEW7JGNqy5AczEGwToFr '
      ];
    },1000)



  });